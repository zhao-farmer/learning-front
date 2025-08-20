import {
  Controller,
  Req,
  Query,
  Body,
  Headers,
  HttpCode,
  Get,
  Param,
} from '@nestjs/common';
import type { Request } from 'express';

@Controller('test')
export class TestController {
  // get请求测试 @Request
  @Get('getTestRequest')
  getTestRequest(@Req() req: Request) {
    console.log(req.query);
    return '';
  }

  // get请求测试 @Query
  @Get('getTestQuery')
  getTestQuery(@Query() req: string) {
    console.log(req);
    return '';
  }

  // post请求测试 @Request
  @Get('postTestRequest')
  postTestRequest(@Req() req: Request) {
    console.log(req.body);
    return '';
  }

  // post请求测试 @Query
  @Get('postTestBody')
  postTestBody(@Body() req: object) {
    console.log(req);
    return '';
  }

  // url路径中参数
  @Get('getTestParam/:id')
  getTestParam(@Param('id') id: string) {
    console.log(id);
    return '';
  }

  // 获取header信息
  @Get('getHeaders/:id')
  getHeaders(@Headers() header) {
    console.log(header);
    return {
      code: 200,
    };
  }

  // 直接返回状态码
  @Get('getStatusCode/:id')
  @HttpCode(500)
  getStatusCode(@Headers() header) {
    return {
      code: 500,
    };
  }
}
