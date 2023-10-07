import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CountryListSchema, CountrySchema } from './schemas';

@Controller('countries')
export class CountriesController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getAll() {
    const countries = await this.prismaService.country.findMany({});

    return CountryListSchema.parse(countries);
  }

  @Get(':cca2')
  async getOne(@Param('cca2') cca2: string) {
    const country = await this.prismaService.country.findFirst({
      where: { cca2 },
    });
    if (!country) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return CountrySchema.parse(country);
  }
}
