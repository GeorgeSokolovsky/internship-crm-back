import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateArticleDto {
    @IsNotEmpty()
    readonly title: string;
    
    @IsNotEmpty()
    readonly content: string;

    readonly imgUrl: string;
}