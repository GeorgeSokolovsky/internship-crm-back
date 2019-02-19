import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { NewsSchema } from './schemas/news.schema';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'News', schema: NewsSchema}])],
    controllers: [NewsController],
    providers: [NewsService]
})
export class NewsModule{}