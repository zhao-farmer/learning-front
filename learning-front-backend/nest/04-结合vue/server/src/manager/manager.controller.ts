import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { TransferMoneyDto } from './dto/create-manager.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post('/transferMoney')
  transferMoney(@Body() transferMoneyDto: TransferMoneyDto) {
    return this.managerService.transferMoney(transferMoneyDto);
  }

}
