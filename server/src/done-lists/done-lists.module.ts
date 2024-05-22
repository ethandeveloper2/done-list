import { Module } from '@nestjs/common';
import { DoneListsService } from './done-lists.service';
import { DoneListsController } from './done-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoneList } from './entities/done-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoneList])],
  controllers: [DoneListsController],
  providers: [DoneListsService],
})
export class DoneListsModule {}
