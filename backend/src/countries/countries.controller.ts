import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAll() {
    return this.countriesService.getAll();
  }

  @Get(':cca2')
  async getOne(@Param('cca2') cca2: string) {
    const country = await this.countriesService.getOne({ cca2 });
    if (!country) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return country;
  }
}
