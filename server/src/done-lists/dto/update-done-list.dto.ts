import { PartialType } from '@nestjs/mapped-types';
import { CreateDoneListDto } from './create-done-list.dto';

export class UpdateDoneListDto extends PartialType(CreateDoneListDto) {}
