import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/Response';
import { HttpFilter } from './common/HttpFilter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { RoleGuard } from './guard/role/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加全局 响应拦截器
  app.useGlobalInterceptors(new Response())
  // 添加全局 异常过滤器
  app.useGlobalFilters(new HttpFilter())
  // 全局的管道验证
  app.useGlobalPipes(new ValidationPipe())
  // 全局守卫
  // app.useGlobalGuards(new RoleGuard())

  const options = new DocumentBuilder().setTitle('我的接口文档')
                          .addBearerAuth()
                          .setDescription('描述....')
                          .setVersion('1')
                          .build()
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup("/api-docs",app,document)



  await app.listen(process.env.PORT ?? 3006);
}
bootstrap();
