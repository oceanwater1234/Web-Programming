import { IsString , IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @IsString()
  @IsNotEmpty({ message: 'username is required' })
  @ApiProperty({
    description: "username",
    example: "Leesu0605"
  })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  @ApiProperty({
    description: "password",
    example: "12345678"
  })
  password: string;
}
