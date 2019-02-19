import { ENTITY_NAME } from './../constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { ArticleSchema } from './schemas/article.schema';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
    imports: [MongooseModule.forFeature([{name: ENTITY_NAME, schema: ArticleSchema}])],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule{}