import { Test, TestingModule } from '@nestjs/testing';
import { DoneItemsController } from './done-items.controller';
import { DoneItemsService } from './done-items.service';

describe('DoneItemsController', () => {
  let controller: DoneItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoneItemsController],
      providers: [DoneItemsService],
    }).compile();

    controller = module.get<DoneItemsController>(DoneItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
