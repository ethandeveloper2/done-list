import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DoneItemsService } from './done-items.service';
import { CreateDoneItemDto } from './dto/create-done-item.dto';
import { UpdateDoneItemDto } from './dto/update-done-item.dto';
import { DoneItem } from './entities/done-item.entity';

@Controller('done-items')
export class DoneItemsController {
  constructor(private readonly doneItemsService: DoneItemsService) {}

  @Get()
  findAll(): Promise<DoneItem[]> {
    return this.doneItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DoneItem> {
    return this.doneItemsService.findOne(+id);
  }

  @Post()
  create(@Body() createDoneItemDto: CreateDoneItemDto): Promise<DoneItem> {
    return this.doneItemsService.create(createDoneItemDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoneItemDto: UpdateDoneItemDto,
  ): Promise<DoneItem> {
    return this.doneItemsService.update(+id, updateDoneItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.doneItemsService.remove(+id);
  }
}
