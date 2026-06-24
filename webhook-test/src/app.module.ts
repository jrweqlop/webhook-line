import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServerSocketModule } from './server-socket/server-socket.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    ServerSocketModule,
    WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
