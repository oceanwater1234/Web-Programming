import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { JwtPayload } from '../../type/jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(
    public readonly config: ConfigService,
    public readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //인증 정보를 어디서 추출할지 결정
      secretOrKey: config.get<string>('ACCESS_SECRET'), //JWT를 검증할 때 사용할 비밀키 저장
      ignoreExpiration: true, //토큰의 만료여부 검사 함(내가 일부러 바꿈 ㅋ)
      passReqToCallback: true, //validate함수의 첫번째 인자로 요청 객체를 전달 할 수 있게 함 ㅇㅇ
    });
  }

  async validate(user: Express.User & Partial<JwtPayload>) { //2개의 객체의 속성을 합친게 user임
    delete user.iat;
    delete user.exp;
    return user;
  }
}