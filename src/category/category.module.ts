import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategorySchema } from './schemas/category.schema';
import { CATEGORY_MODEL } from './../constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CATEGORY_MODEL, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
