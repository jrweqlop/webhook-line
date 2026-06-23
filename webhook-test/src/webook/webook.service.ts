import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebookService {

  constructor(private readonly httpService: HttpService) { }

  async create(data: Object) {
    // const result = await this.httpService.post('https://mhssw-srih.moph.go.th/webhook/api/messaging/webhook', data, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   timeout: 10000
    // });
    // const result = await this.httpService.post('http://localhost:4000/api/messaging/webhook', data).then(e => e.data).catch(() => {
    //   return { code: 400, message: "cannot", data: false }
    // });
    // return 'This action adds a new webook';
    // return result
    try {
      // const result = await firstValueFrom(this.httpService.post('http://localhost:4000/api/messaging/webhook', data))
      const result = await firstValueFrom(this.httpService.post('https://mhssw-srih.moph.go.th/webhook/api/messaging/webhook', data))
      return result.data
    } catch (e) {
      return { code: 400, message: 'cannot', data: false }
    }
  }
}
