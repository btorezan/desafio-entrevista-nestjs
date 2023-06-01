import { UsersService } from '../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(userEmail: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(userEmail);
    const isMatch = await bcrypt.compare(pass, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, nam: user.name, rol: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
