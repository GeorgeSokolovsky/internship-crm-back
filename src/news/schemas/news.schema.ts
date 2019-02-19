import { Schema } from 'mongoose';

export const NewsSchema = new Schema({
    title: String,
    description: String
});