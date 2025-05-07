import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Gender, Interest, Photo } from 'generated/prisma';
import { PhotoDto } from './photo.dto';
import { InterestDto } from 'src/modules/interests/dto/create.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  password: string;

  @IsEnum(Gender)
  searchFor: Gender;

  @IsBoolean()
  phoneVerified: boolean;

  @IsBoolean()
  emailVerified: boolean;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhotoDto)
  photos?: PhotoDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InterestDto)
  interests?: InterestDto[];
}
