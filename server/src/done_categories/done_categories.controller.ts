import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DoneCategoriesService } from './done_categories.service';
import { CreateDoneCategoryDto } from './dto/create-done_category.dto';
import { UpdateDoneCategoryDto } from './dto/update-done_category.dto';

@Controller('done-categories')
export class DoneCategoriesController {
  constructor(private readonly doneCategoriesService: DoneCategoriesService) {}

  @Post()
  create(@Body() createDoneCategoryDto: CreateDoneCategoryDto) {
    return this.doneCategoriesService.create(createDoneCategoryDto);
  }

  @Get()
  findAll() {
    return this.doneCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doneCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDoneCategoryDto: UpdateDoneCategoryDto,
  ) {
    return this.doneCategoriesService.update(+id, updateDoneCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doneCategoriesService.remove(+id);
  }
}
