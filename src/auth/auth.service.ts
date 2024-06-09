import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from 'src/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async SignIn({username,password}:SignInDto) : Promise<string> {
        const user = await this.userRepository.findOneBy({ username })

        if(!user){
            throw new HttpException('User Not Found',HttpStatus.BAD_REQUEST)
        }

        if(!(await bcrypt.compare(password,user.password))){
            throw new HttpException('Invaild password', HttpStatus.BAD_REQUEST);
        }

        return await this.generateRefreshToken(user);
    }

    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }

    async SignUp({
        email, 
        school, 
        name, 
        username, 
        password }:SignUpDto) : Promise<string> {
        
        const user = await this.userRepository.findOneBy({ email })

        if(user) {
            throw new HttpException('User already exits',HttpStatus.BAD_REQUEST);
        }
        
        const newUser = this.userRepository.create({
            email, 
            school, 
            name, 
            username, 
            password: await this.hashPassword(password),
        })

        await this.userRepository.save(newUser)
        return await this.generateAccessToken(newUser);
    }


    async generateRefreshToken(user: Express.User): Promise<string> {
        return await this.jwtService.signAsync(
          { ...user },
          {
            secret: this.configService.get<string>('REFRESH_SECRET'),
            expiresIn: this.configService.get<string>('REFRESH_EXPIRED'),
          },
        );
      }

    async generateAccessToken(user: Express.User): Promise<string>{ 
        return await this.jwtService.signAsync(
            {...user},
            {
                secret: this.configService.get<string>('ACCESS_SECRET'),
                expiresIn: this.configService.get<string>('ACCESS_EXPIRED'),
            },
        )
    }

    async validateRefreshToken(refreshToken: string, email: string) {
        const user = await this.jwtService.verifyAsync(refreshToken, {
          secret: this.configService.get<string>('REFRESH_SECRET'),
        });
    
        return user?.email === email ? true : false;
    }
}
