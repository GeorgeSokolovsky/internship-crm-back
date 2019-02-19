import { CreateNewsDto } from './dto/CreateNewsDto';
import { NewsService } from './news.service';
import { Post, Body, Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Post()
    async create(@Body() createNewsDto: CreateNewsDto) {
        this.newsService.create(createNewsDto);
    }

    @Get()
    async findAll() {
        return this.newsService.findAll()
    }
}