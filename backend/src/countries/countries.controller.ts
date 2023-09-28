import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Country } from '@prisma/client';

@Controller('countries')
export class CountriesController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getAll(): Promise<Country[]> {
    return await this.prismaService.country.findMany({});
  }

  @Get(':cca2')
  async getOne(@Param('cca2') cca2: string): Promise<Country> {
    const countries = await this.prismaService.country.findMany({});
    const country = countries.find((country) => country.cca2 === cca2);
    if (!country) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return country;
  }
}
