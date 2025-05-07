import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.dto';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsArray()
  photosToDelete?: number[]; // IDs das fotos a serem excluídas

  @IsOptional()
  @IsArray()
  interestsToDelete?: number[]; // IDs dos interesses a serem excluídos
}
