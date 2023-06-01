import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.singIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('role')
  getRole(@Request() req) {
    return req.nam;
  }
}
