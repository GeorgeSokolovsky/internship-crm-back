import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
    title: String,
    content: String,
    imgUrl: String,
    createdAt: new Date(),
    updatedAt: new Date()
});