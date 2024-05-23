import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'common/base.entity';

@Entity()
export class Unit extends BaseEntity {
  @Column({ unique: true })
  unit_name: string;
}
