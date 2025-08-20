import { Module } from '@nestjs/common';
import { SwaagerService } from './swaager.service';
import { SwaagerController } from './swaager.controller';

@Module({
  controllers: [SwaagerController],
  providers: [SwaagerService],
})
export class SwaagerModule {}
