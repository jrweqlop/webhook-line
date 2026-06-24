import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService,
    private readonly event: EventEmitter2) { }

  @Get()
  async view() {
    return {
      code: 200,
      message: 'continue test webhook line send data'
    }
  }

  @Post('message')
  async postMessage(@Body() body: unknown) {
    this.event.emitAsync('send-data', body)
    return { code: 200, message: "success" }
  }
}
