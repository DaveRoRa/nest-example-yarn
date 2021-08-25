import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationDto {
  locations: string[];
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list.hds')
  listLocations(): ILocationDto {
    return {
      locations: ['location 1', 'location 2', 'location 3'],
    };
  }
}
