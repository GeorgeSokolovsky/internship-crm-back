import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
    title: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} });