import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  findAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  findOne(id: number): Promise<Tag> {
    return this.tagsRepository.findOne({ where: { id } });
  }

  create(tag: Tag): Promise<Tag> {
    return this.tagsRepository.save(tag);
  }

  async update(id: number, tag: Partial<Tag>): Promise<Tag> {
    await this.tagsRepository.update(id, tag);
    return this.tagsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}
