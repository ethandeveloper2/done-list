import { Module } from '@nestjs/common';
import { DoneCategoriesService } from './done_categories.service';
import { DoneCategoriesController } from './done_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoneCategory } from './entities/done_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoneCategory])],
  controllers: [DoneCategoriesController],
  providers: [DoneCategoriesService],
})
export class DoneCategoriesModule {}
