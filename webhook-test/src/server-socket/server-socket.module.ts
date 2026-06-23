import { Module } from '@nestjs/common';
import { ServerSocketService } from './server-socket.service';
import { ServerSocketGateway } from './server-socket.gateway';

@Module({
  providers: [ServerSocketGateway, ServerSocketService],
})
export class ServerSocketModule { }
