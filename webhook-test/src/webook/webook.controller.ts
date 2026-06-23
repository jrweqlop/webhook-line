import { Controller, Post, Body, Res, HttpStatus, Get, BadRequestException, } from '@nestjs/common';
import { WebookService } from './webook.service';
import { CreateWebookDto } from './dto/create-webook.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('webook')
export class WebookController {
  constructor(private readonly webookService: WebookService,
    private readonly event: EventEmitter2
  ) { }

  @Get()
  async view() {
    return {
      code: 200,
      message: 'continue test webhook line send data'
    }
  }

  @Post()
  async create(@Body() body: any) {
    console.log(body)
    const result = await this.webookService.create(body);
    return result
  }

  @Post('message')
  async postMessage(@Body() body: object) {
    this.event.emitAsync('send-data', body)
    return { code: 200, message: "success" }
  }

}
