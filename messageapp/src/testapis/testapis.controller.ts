import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { TestapisService } from './testapis.service';

@Controller('testapis')
export class TestapisController {
    constructor( private testApiService: TestapisService) {}

    @Get()
    getAll(){
        return this.testApiService.getAll();
    }
}
