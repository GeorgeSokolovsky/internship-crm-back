import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { UserService } from '../user/services/user.service';
import { ResponseData } from '../interfaces/response-data.interface';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { Token } from '../interfaces/token.interface';
import { auth } from '../../../config.json';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  private createToken(user: JwtPayload): Token {
    return {
      expiresIn: auth.expires,
      accessToken: this.jwtService.sign(user, { expiresIn: auth.expires }),
    };
  }

  async validateUserByPassword(
    loginAttempt: LoginUserDto,
  ): Promise<ResponseData> {
    const user = await this.userService.findOneByEmail(loginAttempt.email);

    if (!user || !compareSync(loginAttempt.password, user.password)) {
      throw new UnauthorizedException();
    }

    return {
      user: { email: user.email, name: user.name },
      token: this.createToken({ email: user.email }),
    };
  }

  async validateUserByJwt(payload: JwtPayload): Promise<ResponseData> {
    let user = await this.userService.findOneByEmail(payload.email);

    if (!user) throw new UnauthorizedException();

    return {
      user,
      token: this.createToken({ email: user.email }),
    };
  }
}
