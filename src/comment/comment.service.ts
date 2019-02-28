import { InjectModel } from '@nestjs/mongoose';
import { COMMENT_MODEL } from './../constants';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Comment } from './interfaces/comment.interface';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(COMMENT_MODEL) private readonly commentModel: Model<Comment>,
  ) {}

  async create(comment: Comment): Promise<Comment> {
    const createdComment = new this.commentModel(comment);
    return await createdComment.save();
  }

  async findByArticleId(id: string) {
    return await this.commentModel.find({ articleId: id }).exec();
  }
}
