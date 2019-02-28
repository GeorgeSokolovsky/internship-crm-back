import {
  TIMESTAMPS,
  CATEGORY_MODEL,
  USER_INFO_MODEL,
  COMMENT_MODEL,
} from './../../constants';
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
    author: {
      type: Schema.Types.ObjectId,
      ref: USER_INFO_MODEL,
    },
  },
  TIMESTAMPS,
);
