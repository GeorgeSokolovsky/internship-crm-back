import { User } from './user.interface';
import { Token } from './token.interface';

export interface ResponseData {
  user: User;
  token: Token;
}
