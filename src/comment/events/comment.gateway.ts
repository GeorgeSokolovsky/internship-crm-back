import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { removeItemFromArray } from 'src/utils';

@WebSocketGateway(3001)
export class CommentGateway implements OnGatewayConnection {
  @WebSocketServer() server;
  commentViewers = new Map();

  handleConnection(client) {
    client.emit('connection', 'Connected to the server');
  }

  @SubscribeMessage('startView')
  startView(client, articleId: string) {
    const listeners = this.commentViewers.get(articleId) || [];

    this.commentViewers.set(articleId, [...listeners, client]);
  }

  @SubscribeMessage('endView')
  endView(client, articleId: string) {
    const listeners = this.commentViewers.get(articleId);
    this.commentViewers.set(articleId, [
      ...removeItemFromArray(listeners, client),
    ]);
  }
}
