import { Module } from '@nestjs/common';
import { DoneItemsService } from './done-items.service';
import { DoneItemsController } from './done-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoneItem } from './entities/done-item.entity';
import { User } from 'users/entities/user.entity';
import { Category } from 'categories/entities/category.entity';
import { Unit } from 'units/entities/unit.entity';
import { Tag } from 'tags/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoneItem, User, Category, Unit, Tag])],
  providers: [DoneItemsService],
  controllers: [DoneItemsController],
})
export class DoneItemsModule {}
