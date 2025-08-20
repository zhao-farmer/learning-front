import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';

@Controller('module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get('useController')
  findAll() {
    return this.moduleService.useService();
  }
}
