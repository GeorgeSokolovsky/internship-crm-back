import { Document } from 'mongoose';

export interface Comment extends Document {
  readonly content: string;
  readonly articleId: string;
  readonly author: string;
}
