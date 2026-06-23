import { Controller, Post, Body, Res, HttpStatus, Get, BadRequestException, } from '@nestjs/common';
import { WebookService } from './webook.service';
import { CreateWebookDto } from './dto/create-webook.dto';

@Controller('webook')
export class WebookController {
  constructor(private readonly webookService: WebookService) { }

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
}
