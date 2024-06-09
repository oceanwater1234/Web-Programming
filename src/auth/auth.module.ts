import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule , ConfigService } from '@nestjs/config';


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { AccessStrategy } from './strategies/access.strategy';
import { RefreshGuard } from './guards/refresh.guard';
import { AccessGuard } from './guards/access.guard';
import { User } from '../entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('ACCESS_SECRET'),
        expiresIn: config.get('ACCESS_EXPIRED'),
        }),
      }),
    ],
  controllers: [ AuthController ],
  providers: [ AuthService,RefreshGuard,AccessGuard,RefreshStrategy,AccessStrategy ],
})

export class AuthModule {}
