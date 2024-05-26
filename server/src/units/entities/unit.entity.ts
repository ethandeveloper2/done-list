import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('units')
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  korean_name: string;

  @Column({ type: 'varchar', length: 50 })
  symbol: string;
}
