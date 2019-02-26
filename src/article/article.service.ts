import { ARTICLE_MODEL } from './../constants';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/ArticleDto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(ARTICLE_MODEL) private readonly articleModel: Model<Article>,
  ) {}

  async create(articleDto: ArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(articleDto);
    return await createdArticle.save();
  }

  async update(id: string, articleDto: ArticleDto): Promise<Article> {
    return await this.articleModel
      .findOneAndUpdate({ _id: id }, articleDto)
      .exec();
  }

  async findByCategory(categoryId: string): Promise<Article[]> {
    const params = categoryId ? { category: categoryId } : {};
    return await this.articleModel.find(params);
  }

  async findById(id: string): Promise<Article> {
    return await this.articleModel
      .findById(id)
      .populate('category')
      .exec();
  }
}
