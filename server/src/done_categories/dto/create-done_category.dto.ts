import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDoneCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
