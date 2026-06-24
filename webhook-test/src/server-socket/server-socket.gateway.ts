import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ServerSocketService } from './server-socket.service';
import { OnEvent } from '@nestjs/event-emitter';
import { Server } from 'socket.io';

@WebSocketGateway({ transports: ['polling'], namespace: '/api/gateway/webhook' })
export class ServerSocketGateway {
  constructor(private readonly serverSocketService: ServerSocketService) { }

  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: unknown,
    @ConnectedSocket() client) {
    this.server.emit('data', JSON.stringify(data))
  }

  @OnEvent('send-data')
  async handleOrderCreatedEvent(payload: object) {
    this.server.emit('data', payload)
  }

}
