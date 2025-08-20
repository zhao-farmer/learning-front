import { Test, TestingModule } from '@nestjs/testing';
import { SwaagerService } from './swaager.service';

describe('SwaagerService', () => {
  let service: SwaagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwaagerService],
    }).compile();

    service = module.get<SwaagerService>(SwaagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
