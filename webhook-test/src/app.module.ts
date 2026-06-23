import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WebookModule } from './webook/webook.module';
import { ServerSocketModule } from './server-socket/server-socket.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    WebookModule,
    ServerSocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
