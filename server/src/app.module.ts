import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { UnitsModule } from './units/units.module';
import { TagsModule } from './tags/tags.module';
import { DoneItemsModule } from './done-items/done-items.module';

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
    UsersModule,
    CategoriesModule,
    UnitsModule,
    TagsModule,
    DoneItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
