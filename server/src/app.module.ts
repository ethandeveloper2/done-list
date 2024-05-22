import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoneListsModule } from './done-lists/done-lists.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DoneCategoriesModule } from './done_categories/done_categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 이 옵션을 설정하면 ConfigModule이 전역 모듈이 됩니다.
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      entities: [__dirname + '/**/entities/*.entity.js'],
      synchronize: true,
      bigNumberStrings: false,
      migrationsRun: false,
      migrations: [__dirname + '/migrations/*.ts'],
      migrationsTableName: 'typeorm_migrations',
      logging: true,
    }),
    DoneListsModule,
    DoneCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
