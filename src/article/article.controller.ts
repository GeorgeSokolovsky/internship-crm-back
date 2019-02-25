import { CreateArticleDto } from './dto/CreateArticleDto';
import { SearchQuery } from './interfaces/search-query.interface';
import { ArticleService } from './article.service';
import { Post, Body, Controller, Get, Param, Query } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    this.articleService.create(createArticleDto);
  }

  @Get()
  async findByCategory(@Query() query: SearchQuery) {
    return this.articleService.findByCategory(query.id);
  }

  @Get(':id')
  async findAll(@Param('id') id: string) {
    return this.articleService.findById(id);
  }
}
