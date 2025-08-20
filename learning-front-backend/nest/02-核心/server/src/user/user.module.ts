import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Logger } from '../logger.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // controller的参数是user
    // consumer.apply(Logger).forRoutes('user');
    // controller 直接塞入引入类
    // consumer.apply(Logger).forRoutes(UserController);
    // 单独针对Get请求
    consumer
      .apply(Logger)
      .forRoutes({ path: 'user', method: RequestMethod.GET });
  }
}
