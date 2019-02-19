import { ENTITY_NAME } from './../constants';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/CreateArticleDto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Article } from "./interfaces/article.interface";

@Injectable()
export class ArticleService {
    constructor(@InjectModel(ENTITY_NAME) private readonly articleModel: Model<Article>) {}

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return await createdArticle.save();
    }

    async findAll(): Promise<Article> {
        return await this.articleModel.find().exec();
    }
}