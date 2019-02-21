import { Schema } from 'mongoose';

export const ArticleSchema = new Schema(
  {
    title: String,
    content: String,
    imgUrl: String,
    category: String
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);
