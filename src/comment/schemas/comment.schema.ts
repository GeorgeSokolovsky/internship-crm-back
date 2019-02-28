import { USER_INFO_MODEL, TIMESTAMPS } from './../../constants';
import { Schema } from 'mongoose';

export const CommentSchema = new Schema(
  {
    content: String,
    articleId: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: USER_INFO_MODEL,
    },
  },
  TIMESTAMPS,
);
