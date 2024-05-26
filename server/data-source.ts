
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: './.env',
});

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 9100), 
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  entities: ['./src/**/entities/*.entity.ts'],
  synchronize: false,
  bigNumberStrings: false,
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  logging: true,
  migrationsRun: false,
});
