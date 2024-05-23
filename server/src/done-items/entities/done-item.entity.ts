import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from 'common/base.entity';
import { User } from 'users/entities/user.entity';
import { Category } from 'categories/entities/category.entity';
import { Unit } from 'units/entities/unit.entity';
import { Tag } from 'tags/entities/tag.entity';

@Entity()
export class DoneItem extends BaseEntity {
  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Category, { eager: true })
  category: Category;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @ManyToOne(() => Unit, { eager: true })
  unit: Unit;

  @Column('real')
  value: number;

  @ManyToMany(() => Tag, { eager: true })
  @JoinTable()
  tags: Tag[];
}
