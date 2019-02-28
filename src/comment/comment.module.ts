import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { COMMENT_MODEL } from './../constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: COMMENT_MODEL, schema: CommentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
