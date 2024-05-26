import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDefaultCategories1716700433476
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO categories (name) VALUES 
              ('운동')`,
    );
    await queryRunner.query(
      `INSERT INTO categories (name) VALUES 
            ('공부')`,
    );
    await queryRunner.query(
      `INSERT INTO categories (name) VALUES 
            ('일')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM categories WHERE name IN ('운동', '공부', '일')`,
    );
  }
}
