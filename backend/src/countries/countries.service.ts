import { Injectable } from '@nestjs/common';
import { Country } from '../types/countries';
import { PrismaService } from '../prisma.service';
import { CountryListSchema, CountrySchema } from './schemas';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<Country[]> {
    const countries = await this.prismaService.country.findMany({});
    return CountryListSchema.parse(countries);
  }

  async getOne({ cca2 }: { cca2: string }): Promise<Country> {
    const country = await this.prismaService.country.findFirst({
      where: { cca2 },
    });
    return CountrySchema.parse(country);
  }
}
