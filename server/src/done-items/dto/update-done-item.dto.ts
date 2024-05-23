import { PartialType } from '@nestjs/mapped-types';
import { CreateDoneItemDto } from './create-done-item.dto';

export class UpdateDoneItemDto extends PartialType(CreateDoneItemDto) {}
