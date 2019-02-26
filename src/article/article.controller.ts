import {
  Post,
  Body,
  Controller,
  Get,
  Param,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleDto } from './dto/ArticleDto';
import { SearchQuery } from './interfaces/search-query.interface';
import { ArticleService } from './article.service';

@Controller('article')
@UseGuards(AuthGuard('jwt'))
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() articleDto: ArticleDto) {
    this.articleService.create(articleDto);
  }

  @Put('/:id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: string, @Body() articleDto: ArticleDto) {
    this.articleService.update(id, articleDto);
  }

  @Get()
  async findByCategory(@Query() query: SearchQuery) {
    return this.articleService.findByCategory(query.categoryId);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.articleService.findById(id);
  }
}
