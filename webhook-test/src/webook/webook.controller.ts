import { Controller, Post, Body, Res, HttpStatus, } from '@nestjs/common';
import { WebookService } from './webook.service';
import { CreateWebookDto } from './dto/create-webook.dto';

@Controller('webook')
export class WebookController {
  constructor(private readonly webookService: WebookService) { }

  @Post()
  async create(@Body() body: object): Promise<object> {
    const result = await this.webookService.create(body);
    return result
  }
}
