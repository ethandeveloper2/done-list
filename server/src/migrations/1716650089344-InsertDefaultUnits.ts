import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDefaultUnits1716650089344 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('second', '초', 's')`,
    );
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('won', '원', '₩')`,
    );
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('percent', '퍼센트', '%')`,
    );
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('count', '횟수', '회')`,
    );
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('meter', '미터', 'm')`,
    );
    await queryRunner.query(
      `INSERT INTO units (name, korean_name, symbol) VALUES 
          ('mile', '마일', 'mi')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM units WHERE name IN ('second', 'won', 'percent', 'count', 'meter', 'mile')`,
    );
  }
}
