import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WebookModule } from './webook/webook.module';

@Module({
  imports: [ConfigModule.forRoot(), WebookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
