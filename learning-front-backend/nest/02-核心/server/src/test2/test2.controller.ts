import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleService } from '../module/module.service';

@Controller('test2')
export class Test2Controller {
  constructor(
    private readonly moduleService: ModuleService,
    @Inject('Global') private readonly base: object,
    @Inject('Dynamic') private readonly staticBase: object,
  ) {}

  @Get('share')
  getTest(): string {
    return this.moduleService.useService();
  }

  @Get('global')
  getGlobalTest(): object {
    return this.base;
  }

  @Get('dynamic')
  getDynamicTest(): object {
    return this.staticBase;
  }
}
