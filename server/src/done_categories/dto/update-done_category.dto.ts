import { PartialType } from '@nestjs/mapped-types';
import { CreateDoneCategoryDto } from './create-done_category.dto';

export class UpdateDoneCategoryDto extends PartialType(CreateDoneCategoryDto) {}
