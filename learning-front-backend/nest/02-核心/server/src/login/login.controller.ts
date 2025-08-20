import { Controller, Res, Body, Post, Get, Session } from '@nestjs/common';
import type { Response } from 'express';

import * as svgCaptcha from 'svg-captcha';

@Controller('login')
export class LoginController {
  @Get('code')
  createCaptcha(@Session() session: Record<string, any>, @Res() res: Response) {
    const options = {
      size: 4, // 验证码长度
      ignoreChars: '0o1i', // 排除容易混淆的字符
      noise: 2, // 干扰线数量
      color: true, // 彩色验证码
      background: '#cc9966', // 背景色
      width: 100, // 宽度
      height: 40, // 高度
      fontSize: 50, // 字体大小
    };

    const captcha = svgCaptcha.create(options);
    session.code = captcha.text; //存储验证码记录到session
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(
    @Body() body: Record<string, any>,
    @Session() session: Record<string, any>,
  ) {
    console.log(session.code, body);
    if (session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: '验证码正确',
      };
    } else {
      return {
        message: '验证码错误',
      };
    }
  }
}
