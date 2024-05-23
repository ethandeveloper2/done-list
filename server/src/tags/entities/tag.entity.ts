import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'common/base.entity';

@Entity()
export class Tag extends BaseEntity {
  @Column({ unique: true })
  tag_name: string;
}
