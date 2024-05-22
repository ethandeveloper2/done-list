import { Test, TestingModule } from '@nestjs/testing';
import { DoneListsController } from './done-lists.controller';
import { DoneListsService } from './done-lists.service';

describe('DoneListsController', () => {
  let controller: DoneListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoneListsController],
      providers: [DoneListsService],
    }).compile();

    controller = module.get<DoneListsController>(DoneListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
