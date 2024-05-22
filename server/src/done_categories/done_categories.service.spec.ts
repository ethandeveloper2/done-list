import { Test, TestingModule } from '@nestjs/testing';
import { DoneCategoriesService } from './done_categories.service';

describe('DoneCategoriesService', () => {
  let service: DoneCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoneCategoriesService],
    }).compile();

    service = module.get<DoneCategoriesService>(DoneCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
