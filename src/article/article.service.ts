import { ARTICLE_MODEL } from './../constants';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { UpdateArticleData } from './interfaces/updateArticleData.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(ARTICLE_MODEL) private readonly articleModel: Model<Article>,
  ) {}

  async create(article: Article): Promise<Article> {
    const createdArticle = new this.articleModel(article);
    return await createdArticle.save();
  }

  async update(id: string, article: UpdateArticleData): Promise<Article> {
    return await this.articleModel
      .findOneAndUpdate({ _id: id }, article)
      .exec();
  }

  async findByCategory(categoryId: string): Promise<Article[]> {
    const params = categoryId ? { category: categoryId } : {};
    return await this.articleModel.find(params).populate('author');
  }

  async findById(id: string): Promise<Article> {
    return await this.articleModel
      .findById(id)
      .populate('category')
      .exec();
  }
}
