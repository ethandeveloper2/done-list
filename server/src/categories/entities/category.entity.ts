import { BaseEntity } from 'common/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column({ unique: true })
  category_name: string;
}
