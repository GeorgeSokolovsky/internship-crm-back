import { SearchCategory } from './interfaces/search-category.interface';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { CategoryService } from './category.service';
import { Controller, Body, Get, Post, Param, Query } from '@nestjs/common';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        this.categoryService.create(createCategoryDto);
    }

    @Get()
    async find(@Query() query: SearchCategory) {
        const {search, limit, offset} = query;
        return this.categoryService.find(search, +limit, +offset);
    }

    @Get(':id')
    async findById(@Param('id') id) {
        return this.categoryService.findById(id);
    }
}