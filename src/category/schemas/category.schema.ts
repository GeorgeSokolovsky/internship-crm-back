import { TIMESTAMPS } from './../../constants';
import { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    name: String,
  },
  TIMESTAMPS,
);
