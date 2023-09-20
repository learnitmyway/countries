import { Controller, Get } from '@nestjs/common';
import * as data from './data.json';

type Country = {
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
    return data;
  }
}
