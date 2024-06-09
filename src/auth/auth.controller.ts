import { 
  Controller, 
  Post, 
  Res, 
  Req,
  Body, 
  UseGuards 
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Response, Request } from 'express';


import { REFRESH_TOKEN_KEY, REFRESH_TOKEN_OPTION } from '../utils/cookie';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { AccessGuard } from './guards/access.guard';
import { RefreshGuard } from './guards/refresh.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('SignIn')
  @ApiOkResponse({description:"user login successful"})
  async SignIn(@Res() res: Response, @Body() SignInDto: SignInDto) {
    const refreshToken = await this.authService.SignIn(SignInDto)

    res.cookie(REFRESH_TOKEN_KEY,refreshToken,REFRESH_TOKEN_OPTION())
    res.send(refreshToken)
  }

  @Post('SignUp')
  async SignUp(@Res() res: Response, @Body() SignUpDto: SignUpDto) {
    const refreshToken = await this.authService.SignUp(SignUpDto)
    
    res.cookie(REFRESH_TOKEN_KEY,refreshToken,REFRESH_TOKEN_OPTION())
    res.send(refreshToken)
  }

  @Post('/SignOut')
  @ApiBearerAuth()
  @UseGuards(AccessGuard)
  async SignOut(@Res() res: Response){
    res.clearCookie(REFRESH_TOKEN_KEY)
    res.send("OK")
  }
}
