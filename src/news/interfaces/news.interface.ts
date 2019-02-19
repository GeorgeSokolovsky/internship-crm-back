import { Document } from 'mongoose';

export interface News extends Document {
    readonly title: string;
    readonly description: string;
}