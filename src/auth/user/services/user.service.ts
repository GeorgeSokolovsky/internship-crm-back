import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { USER_MODEL, USER_INFO_MODEL } from '../../../constants';
import { User, UserInfo } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<User>,
    @InjectModel(USER_INFO_MODEL)
    private readonly userInfoModel: Model<UserInfo>,
  ) {}

  async create({ email, name, password }: CreateUserDto): Promise<User> {
    const createdUSerInfo = new this.userInfoModel({ email, name });
    const createdUser = new this.userModel({
      email,
      password,
      info: createdUSerInfo._id,
    });
    await createdUSerInfo.save();
    return await createdUser.save();
  }

  async findOneByEmail(email: string): Model<User> {
    return await this.userModel.findOne({ email }).populate('info');
  }
}
