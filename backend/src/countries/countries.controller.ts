import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import * as data from './data.json';

type Country = {
  cca2: string;
  capital?: string[];
  currencies?: {
    [code: string]: { name: string; symbol?: string };
  };
  flags: { png: string };
  languages?: { [code: string]: string };
  name: {
    common: string;
    nativeName?: { [code: string]: { common: string } };
  };
  population: number;
  region: string;
  subregion?: string;
};

@Controller('countries')
export class CountriesController {
  @Get()
  getAll(): Country[] {
    return data as Country[];
  }

  @Get(':cca2')
  getOne(@Param('cca2') cca2: string): Country {
    const countries = data as Country[];
    const country = countries.find((country) => country.cca2 === cca2);
    if (!country) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return country;
  }
}
