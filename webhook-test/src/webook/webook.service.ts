import { Injectable } from '@nestjs/common';
import { CreateWebookDto } from './dto/create-webook.dto';
import { UpdateWebookDto } from './dto/update-webook.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WebookService {

  constructor(private readonly httpService: HttpService) { }

  async create(data: object) {
    const result = await this.httpService.post('https://mhssw-srih.moph.go.th/webhook/api/messaging/webhook', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000
    });
    // return 'This action adds a new webook';
    return result
  }
}
