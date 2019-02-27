import { Document } from 'mongoose';

export interface UpdateArticleData extends Document {
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly imgUrl: string;
}
