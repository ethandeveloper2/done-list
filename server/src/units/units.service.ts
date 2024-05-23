import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './entities/unit.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private unitsRepository: Repository<Unit>,
  ) {}

  findAll(): Promise<Unit[]> {
    return this.unitsRepository.find();
  }

  findOne(id: number): Promise<Unit> {
    return this.unitsRepository.findOne({ where: { id } });
  }

  create(unit: Unit): Promise<Unit> {
    return this.unitsRepository.save(unit);
  }

  async update(id: number, unit: Partial<Unit>): Promise<Unit> {
    await this.unitsRepository.update(id, unit);
    return this.unitsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.unitsRepository.delete(id);
  }
}
