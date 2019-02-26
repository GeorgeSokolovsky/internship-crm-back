import { Schema } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  next();
});

UserSchema.methods.isValidPassword = password => {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};
