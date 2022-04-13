import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable  } from 'rxjs';
import { TestapiDto } from './dto/testapi-dto';

@Injectable()
export class TestapisService {
    constructor(private httpService: HttpService) {}

    apiUrl = 'https://rickandmortyapi.com/api';

    async getAll() {
        const { data } = await firstValueFrom(this.httpService.get(this.apiUrl))
        return data;
    }
}
