import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { I18n, polyglot } from 'src/i18n';

export class CreateProductDTO {
  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  @Length(3, 200, polyglot(I18n.LENGTH_MESSAGE, { min: 3, max: 200 }))
  Title: string;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  Image: string;

  @IsNotEmpty(polyglot(I18n.NOT_EMPTY_MESSAGE))
  @IsNumber(polyglot(I18n.ONLY_NUMBER_MESSAGE))
  Price: number;

  @IsString(polyglot(I18n.STRING_MESSAGE))
  @Length(0, 4000, polyglot(I18n.LENGTH_MESSAGE, { min: 0, max: 4000 }))
  Description: string;
}
