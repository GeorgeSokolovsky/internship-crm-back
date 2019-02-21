import { Category } from './../../category/interfaces/category.interface';
import { Document } from 'mongoose';

export interface Article extends Document {
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly imgUrl: string;
}
