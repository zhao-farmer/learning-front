import { NestFactory } from '@nestjs/core';
// 导入版本控制
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
// 引入session
import session from 'express-session';
// 引入cors 用于跨域
import cors from 'cors';
// 应用于访问静态图片
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { Request, Response, NextFunction } from 'express';

function middleWareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl, '我收全局的');
  if (['/list'].includes(req.originalUrl)) {
    next();
  } else {
    res.send('小黑子，露出鸡脚了吧');
  }
}

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/myImages',
  });

  // 版本控制模式
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 调用启动项
  app.use(
    session({
      secret: 'your-secret-key', // 用于签名 session ID 的密钥
      resave: false, // 强制保存未修改的 session
      saveUninitialized: false, // 强制保存未初始化的 session
      cookie: {
        maxAge: 3600000, // cookie 过期时间 (1小时)
        secure: process.env.NODE_ENV === 'production', // 生产环境下使用 HTTPS
      },
    }),
  );
  // 使用全局中间件
  // app.use(middleWareAll);
  // 使用cors
  app.use(cors());
  await app.listen(process.env.PORT ?? 3006);
}
bootstrap();
