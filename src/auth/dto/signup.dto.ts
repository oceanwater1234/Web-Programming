import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @IsString()
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'email',
    example: 'mrkwunt@naver.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'school',
    example: 'Seoul National University',
  })
  school: string;

  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({
    description: 'name',
    example: 'Lee',
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  @ApiProperty({
    description: 'username',
    example: 'Leesu0605',
  })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty({
    description: 'password',
    example: '12345678',
  })
  password: string;
}
