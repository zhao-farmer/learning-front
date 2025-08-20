import { Test, TestingModule } from '@nestjs/testing';
import { SwaagerController } from './swaager.controller';
import { SwaagerService } from './swaager.service';

describe('SwaagerController', () => {
  let controller: SwaagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwaagerController],
      providers: [SwaagerService],
    }).compile();

    controller = module.get<SwaagerController>(SwaagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
