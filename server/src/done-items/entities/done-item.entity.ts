import { Category } from 'categories/entities/category.entity';
import { Tag } from 'tags/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Unit } from 'units/entities/unit.entity';
import { User } from 'users/entities/user.entity';

@Entity('done_items')
export class DoneItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => Unit, { eager: true })
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @Column({ type: 'int' })
  value: number;

  @ManyToMany(() => Tag, { eager: true })
  @JoinTable({
    name: 'done_item_tags', // 조인 테이블명 지정
    joinColumn: {
      name: 'done_item_id', // 현재 엔티티의 조인 컬럼명
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id', // 반대 엔티티의 조인 컬럼명
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
