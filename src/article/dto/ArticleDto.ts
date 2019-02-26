import { IsNotEmpty } from 'class-validator';
export class ArticleDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  readonly author: string;

  readonly imgUrl: string;
}
