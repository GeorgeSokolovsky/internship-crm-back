import { CommentGateway } from './events/comment.gateway';
import { CommentDto } from './dto/comment.dto';
import { CommentService } from './comment.service';
import { Post, Body, Controller, UseGuards, Get, Param } from '@nestjs/common';
import { UserDecorator } from '../auth/user/decorators/user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../article/interfaces/user.interface';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private commentGateway: CommentGateway,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@UserDecorator() user: User, @Body() commentDto: CommentDto) {
    const comment = await this.commentService.create({
      ...commentDto,
      author: user._id,
    });

    if (this.commentGateway.commentViewers.has(commentDto.articleId)) {
      this.commentGateway.commentViewers
        .get(commentDto.articleId)
        .forEach(async (client: SocketIO.Socket) => {
          client.emit(
            'newComment',
            await this.commentService.findOne(comment._id),
          );
        });
    }
  }

  @Get('/:articleId')
  async findByArticleId(@Param('articleId') articleId: string) {
    return this.commentService.findByArticleId(articleId);
  }
}
