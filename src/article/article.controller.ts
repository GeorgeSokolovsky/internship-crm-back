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
import { UserDecorator } from '../auth/user/decorators/user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ArticleWithoutAuthorDto } from './dto/ArticleWithoutAuthorDto';
import { SearchQuery } from './interfaces/search-query.interface';
import { User } from './interfaces/user.interface';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @UserDecorator() user: User,
    @Body() articleDto: ArticleWithoutAuthorDto,
  ) {
    this.articleService.create({ ...articleDto, author: user._id });
  }

  @Put('/:id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: string,
    @Body() articleDto: ArticleWithoutAuthorDto,
  ) {
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
