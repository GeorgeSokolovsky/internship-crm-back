import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticleSchema } from './schemas/article.schema';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ARTICLE_MODEL } from './../constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ARTICLE_MODEL, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
