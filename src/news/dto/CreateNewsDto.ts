import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateNewsDto {
    @IsNotEmpty()
    readonly title: string;
    
    @IsNotEmpty()
    readonly description: string;
}