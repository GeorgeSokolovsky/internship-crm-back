import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { Category } from './interfaces/category.interface';
import { CATEGORY_MODEL } from './../constants';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(CATEGORY_MODEL) private readonly categoryModel: Model<Category>) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return await createdCategory.save();
    }

    async findById(id: number): Promise<Category> {
        return await this.categoryModel.findById(id).exec();
    }

    async find(substring: string, option: string): Promise<Category> {
        return await this.categoryModel.find(
            { 'title' : { '$regex':  `^${substring}`, '$options': option } }
        ).exec();
    }

}