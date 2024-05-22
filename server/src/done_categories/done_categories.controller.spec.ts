import { Test, TestingModule } from '@nestjs/testing';
import { DoneCategoriesController } from './done_categories.controller';
import { DoneCategoriesService } from './done_categories.service';

describe('DoneCategoriesController', () => {
  let controller: DoneCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoneCategoriesController],
      providers: [DoneCategoriesService],
    }).compile();

    controller = module.get<DoneCategoriesController>(DoneCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
