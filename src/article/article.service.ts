import { ARTICLE_MODEL } from './../constants';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/CreateArticleDto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(ARTICLE_MODEL) private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  async findByCategory(_id: string): Promise<Article[]> {
    const params = _id ? { category: _id } : {};
    return await this.articleModel.find(params);
  }

  async findById(id: string): Promise<Article> {
    return await this.articleModel
      .findById(id)
      .populate('category')
      .exec();
  }
}
