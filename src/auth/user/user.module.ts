import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { USER_MODEL } from '../../constants';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
