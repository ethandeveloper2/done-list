import { Injectable } from '@nestjs/common';
import { CreateDoneItemDto } from './dto/create-done-item.dto';
import { UpdateDoneItemDto } from './dto/update-done-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoneItem } from './entities/done-item.entity';
import { User } from 'users/entities/user.entity';
import { Category } from 'categories/entities/category.entity';
import { Unit } from 'units/entities/unit.entity';
import { Tag } from 'tags/entities/tag.entity';

@Injectable()
export class DoneItemsService {
  constructor(
    @InjectRepository(DoneItem)
    private doneItemsRepository: Repository<DoneItem>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Unit)
    private unitsRepository: Repository<Unit>,
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  findAll(): Promise<DoneItem[]> {
    return this.doneItemsRepository.find({
      where: { deleted_at: null },
      relations: ['user', 'category', 'unit', 'tags'],
    });
  }

  findOne(id: number): Promise<DoneItem> {
    return this.doneItemsRepository.findOne({
      where: { id, deleted_at: null },
      relations: ['user', 'category', 'unit', 'tags'],
    });
  }

  async create(createDoneItemDto: CreateDoneItemDto): Promise<DoneItem> {
    const { user_id, category_id, unit_id, tags, ...rest } = createDoneItemDto;

    const user = await this.usersRepository.findOne({ where: { id: user_id } });
    const category = await this.categoriesRepository.findOne({
      where: { id: category_id },
    });
    const unit = await this.unitsRepository.findOne({ where: { id: unit_id } });
    const tagEntities = tags ? await this.tagsRepository.find({ where: tags.map(tag => ({ id: tag })) }) : [];

    const doneItem = this.doneItemsRepository.create({
      ...rest,
      user,
      category,
      unit,
      tags: tagEntities,
    });

    return this.doneItemsRepository.save(doneItem);
  }

  async remove(id: number): Promise<void> {
    await this.doneItemsRepository.update(id, { deleted_at: new Date() });
  }

  async update(
    id: number,
    updateDoneItemDto: UpdateDoneItemDto,
  ): Promise<DoneItem> {
    const { user_id, category_id, unit_id, tags, ...rest } = updateDoneItemDto;

    const updateData: Partial<DoneItem> = { ...rest };

    if (user_id !== undefined) {
      updateData.user = await this.usersRepository.findOne({
        where: { id: user_id },
      });
    }
    if (category_id !== undefined) {
      updateData.category = await this.categoriesRepository.findOne({
        where: { id: category_id },
      });
    }
    if (unit_id !== undefined) {
      updateData.unit = await this.unitsRepository.findOne({
        where: { id: unit_id },
      });
    }
    if (tags !== undefined) {
      updateData.tags = await this.tagsRepository.find({ where: tags.map(tag => ({ id: tag })) });
    }

    await this.doneItemsRepository.update(id, updateData);
    return this.doneItemsRepository.findOne({
      where: { id },
      relations: ['user', 'category', 'unit', 'tags'],
    });
  }
}
