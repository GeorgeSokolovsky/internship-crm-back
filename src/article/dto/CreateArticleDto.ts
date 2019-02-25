import { Category } from './../../category/interfaces/category.interface';
import { IsNotEmpty } from 'class-validator';
export class CreateArticleDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly category: string;

  readonly imgUrl: string;
}
