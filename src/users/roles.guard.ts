import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from './roles.decorator';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/enums/roles.enum';
import { jwtConstants } from 'src/auth/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const [, token] = context
      .switchToHttp()
      .getRequest()
      .headers.authorization.split(' ');
    const result = this.jwtService.verify(token, {
      secret: jwtConstants.secret,
    });
    return requiredRoles.some((role) => result?.rol == role);
  }
}
