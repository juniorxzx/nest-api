import { IsString } from 'class-validator';

export class PhotoDto {
  @IsString()
  url: string;
}
