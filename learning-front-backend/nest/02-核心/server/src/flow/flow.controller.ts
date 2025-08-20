import { Controller, Get, Inject } from '@nestjs/common';
import { FlowService } from './flow.service';

@Controller('flow')
export class FlowController {
  constructor(
    // 直接注入
    private readonly flowService: FlowService,
    @Inject('otherName') private readonly flowService2: FlowService,
    @Inject('ds') private readonly shopList: string[],
    @Inject('factory1') private readonly factory1: string,
    @Inject('factory2') private readonly factory2: string,
  ) {}

  @Get('test1')
  findAll() {
    // 返回数据
    const data = {
      test1: this.flowService.test01(),
      test2: this.flowService2.test02(),
      test3: this.shopList,
      test4: this.factory1,
      test5: this.factory2,
    };

    return data;
  }
}
