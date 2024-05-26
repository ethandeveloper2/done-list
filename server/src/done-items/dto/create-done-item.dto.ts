import {
  IsString,
  IsInt,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateDoneItemDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsInt()
  @IsNotEmpty()
  category_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsInt()
  @IsNotEmpty()
  unit_id: number;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsArray()
  @IsOptional()
  tags?: number[];
}
