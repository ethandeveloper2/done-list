import { Test, TestingModule } from '@nestjs/testing';
import { DoneListsService } from './done-lists.service';

describe('DoneListsService', () => {
  let service: DoneListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoneListsService],
    }).compile();

    service = module.get<DoneListsService>(DoneListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
