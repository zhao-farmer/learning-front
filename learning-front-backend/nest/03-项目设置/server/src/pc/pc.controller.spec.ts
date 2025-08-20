import { Test, TestingModule } from '@nestjs/testing';
import { PcController } from './pc.controller';

describe('PcController', () => {
  let controller: PcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcController],
    }).compile();

    controller = module.get<PcController>(PcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
