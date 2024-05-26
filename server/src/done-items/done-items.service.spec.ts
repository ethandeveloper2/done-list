import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoneItemsService } from './done-items.service';
import { DoneItem } from './entities/done-item.entity';
import { User } from 'users/entities/user.entity';
import { Category } from 'categories/entities/category.entity';
import { Unit } from 'units/entities/unit.entity';
import { Tag } from 'tags/entities/tag.entity';

const mockRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('DoneItemsService', () => {
  let service: DoneItemsService;
  let doneItemsRepository: Repository<DoneItem>;
  let usersRepository: Repository<User>;
  let categoriesRepository: Repository<Category>;
  let unitsRepository: Repository<Unit>;
  let tagsRepository: Repository<Tag>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoneItemsService,
        { provide: getRepositoryToken(DoneItem), useValue: mockRepository() },
        { provide: getRepositoryToken(User), useValue: mockRepository() },
        { provide: getRepositoryToken(Category), useValue: mockRepository() },
        { provide: getRepositoryToken(Unit), useValue: mockRepository() },
        { provide: getRepositoryToken(Tag), useValue: mockRepository() },
      ],
    }).compile();

    service = module.get<DoneItemsService>(DoneItemsService);
    doneItemsRepository = module.get<Repository<DoneItem>>(
      getRepositoryToken(DoneItem),
    );
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
    categoriesRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
    unitsRepository = module.get<Repository<Unit>>(getRepositoryToken(Unit));
    tagsRepository = module.get<Repository<Tag>>(getRepositoryToken(Tag));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of done items', async () => {
      const result = [];
      jest.spyOn(doneItemsRepository, 'find').mockResolvedValue(result);
      expect(await service.findAll()).toBe(result);
    });
  });

  // 추가 테스트 케이스 작성
});
