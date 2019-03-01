import { AddComment } from './interfaces/add-comment.interface';
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

  async create(comment: AddComment): Promise<Comment> {
    const createdComment = new this.commentModel(comment);
    return await createdComment.save();
  }

  async findByArticleId(aritcleId: string): Promise<Comment[]> {
    return await this.commentModel
      .find({ articleId: aritcleId })
      .populate('author');
  }

  async findOne(commentId: string): Promise<Comment> {
    return await this.commentModel
      .findOne({ _id: commentId })
      .populate('author');
  }
}
