import { Schema } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { USER_INFO_MODEL } from '../../../constants';

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  info: {
    type: Schema.Types.ObjectId,
    ref: USER_INFO_MODEL,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  next();
});
