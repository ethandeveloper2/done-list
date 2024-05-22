import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoneListsService } from './done-lists.service';
import { CreateDoneListDto } from './dto/create-done-list.dto';
import { UpdateDoneListDto } from './dto/update-done-list.dto';

@Controller('done-lists')
export class DoneListsController {
  constructor(private readonly doneListsService: DoneListsService) {}

  @Post()
  create(@Body() createDoneListDto: CreateDoneListDto) {
    return this.doneListsService.create(createDoneListDto);
  }

  @Get()
  findAll() {
    return this.doneListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doneListsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoneListDto: UpdateDoneListDto,
  ) {
    return this.doneListsService.update(+id, updateDoneListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doneListsService.remove(+id);
  }
}
