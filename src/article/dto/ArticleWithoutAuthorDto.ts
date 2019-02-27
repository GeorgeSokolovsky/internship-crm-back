import { IsNotEmpty } from 'class-validator';
export class ArticleWithoutAuthorDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly category: string;

  readonly imgUrl: string;
}
