import { Module } from '@nestjs/common';
import { WebookService } from './webook.service';
import { WebookController } from './webook.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WebookController],
  providers: [WebookService],
})
export class WebookModule { }
