import { Controller,Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginPipe } from './login/login.pipe';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Post()
  // create(@Body(LoginPipe) createLoginDto: CreateLoginDto) {
  //   return this.loginService.create(createLoginDto);
  // }

  // 直接使用全局
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }
}
