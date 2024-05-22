import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoneListDto } from './dto/create-done-list.dto';
import { UpdateDoneListDto } from './dto/update-done-list.dto';
import { DoneList } from './entities/done-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoneListsService {
  constructor(
    @InjectRepository(DoneList)
    private doneListRepository: Repository<DoneList>,
  ) {}

  async create(createDoneListDto: CreateDoneListDto): Promise<DoneList> {
    const doneList = this.doneListRepository.create(createDoneListDto);
    return await this.doneListRepository.save(doneList);
  }

  findAll(): Promise<DoneList[]> {
    return this.doneListRepository.find();
  }

  async findOne(id: number): Promise<DoneList | null> {
    const doneList = await this.doneListRepository.findOneBy({ id });
    if (!doneList) {
      throw new NotFoundException(`DoneList with id ${id} not found`);
    }
    return doneList;
  }

  async update(
    id: number,
    updateDoneListDto: UpdateDoneListDto,
  ): Promise<DoneList> {
    await this.doneListRepository.update(id, updateDoneListDto);
    const updatedDoneList = await this.doneListRepository.findOneBy({ id });
    if (!updatedDoneList) {
      throw new NotFoundException(`DoneList with id ${id} not found`);
    }
    return updatedDoneList;
  }

  async remove(id: number): Promise<void> {
    const result = await this.doneListRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`DoneList with id ${id} not found`);
    }
  }
}
