import { Module } from '@nestjs/common';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';

@Module({
  // controller 加入进来
  controllers: [FlowController],
  // service加入进来
  providers: [
    // 基础类注册
    FlowService,
    // 别名类注册
    {
      provide: 'otherName',
      useClass: FlowService,
    },
    // 值注册
    {
      provide: 'ds',
      useValue: ['TB', 'PDD', 'JD'],
    },
    // 工厂模式
    {
      provide: 'factory1',
      inject: [FlowService],
      useFactory(flowService: FlowService) {
        return flowService.test03();
      },
    },
    // 异步工厂模式
    {
      provide: 'factory2',
      inject: [FlowService],
      async useFactory(flowService: FlowService) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(flowService.test04());
          }, 2000);
        });
      },
    },
  ],
})
export class FlowModule {}
