import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
}

export interface UserInfo extends Document {
  readonly email: string;
  readonly name: string;
}
