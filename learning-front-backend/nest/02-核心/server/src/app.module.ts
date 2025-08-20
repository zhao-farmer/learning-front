import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestController } from './test/test.controller';
import { LoginController } from './login/login.controller';
import { FlowModule } from './flow/flow.module';
import { ModuleModule } from './module/module.module';
import { Test2Controller } from './test2/test2.controller';
import { GlobalModule } from './module/global.module';
import { DynModule } from './module/dynamic.moudule';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UserModule,
    FlowModule,
    ModuleModule,
    GlobalModule,
    DynModule.forRoot({
      path: '/myPath',
    }),
    UploadModule,
  ],
  controllers: [
    AppController,
    TestController,
    LoginController,
    Test2Controller,
  ],
  providers: [AppService],
})
export class AppModule {}
