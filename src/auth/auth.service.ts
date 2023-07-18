import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtServuce: JwtService,
  ) {}
  async signIn(name: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    // const { pass, ...result } = user;
    // return result;
    const toJwt = { id: user.id, name: user.name };
    return {
      token: await this.jwtServuce.signAsync(toJwt),
    };
  }
}
