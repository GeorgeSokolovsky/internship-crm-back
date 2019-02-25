import { CategorySchema } from './../../category/schemas/category.schema';
import { TIMESTAMPS, CATEGORY_MODEL } from './../../constants';
import { Schema } from 'mongoose';

export const ArticleSchema = new Schema(
  {
    title: String,
    content: String,
    imgUrl: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: CATEGORY_MODEL,
    },
  },
  TIMESTAMPS,
);
