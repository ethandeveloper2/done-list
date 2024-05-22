import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoneCategoryDto } from './dto/create-done_category.dto';
import { UpdateDoneCategoryDto } from './dto/update-done_category.dto';
import { DoneCategory } from './entities/done_category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoneCategoriesService {
  constructor(
    @InjectRepository(DoneCategory)
    private doneCategoryRepository: Repository<DoneCategory>,
  ) {}

  async create(
    createDoneCategoryDto: CreateDoneCategoryDto,
  ): Promise<DoneCategory> {
    const doneCategory = this.doneCategoryRepository.create(
      createDoneCategoryDto,
    );
    return await this.doneCategoryRepository.save(doneCategory);
  }

  findAll(): Promise<DoneCategory[]> {
    return this.doneCategoryRepository.find();
  }

  async findOne(id: number): Promise<DoneCategory | null> {
    const doneCategory = await this.doneCategoryRepository.findOneBy({ id });
    if (!doneCategory) {
      throw new NotFoundException(`DoneCategory with id ${id} not found`);
    }
    return doneCategory;
  }

  async update(
    id: number,
    updateDoneCategoryDto: UpdateDoneCategoryDto,
  ): Promise<DoneCategory> {
    await this.doneCategoryRepository.update(id, updateDoneCategoryDto);
    const updatedDoneCategory = await this.doneCategoryRepository.findOneBy({
      id,
    });
    if (!updatedDoneCategory) {
      throw new NotFoundException(`DoneCategory with id ${id} not found`);
    }
    return updatedDoneCategory;
  }

  async remove(id: number): Promise<void> {
    const result = await this.doneCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`DoneCategory with id ${id} not found`);
    }
  }
}
