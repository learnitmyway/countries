import { Injectable } from '@nestjs/common';
import {
  Country,
  Currencies,
  Flags,
  Languages,
  Name,
} from '../types/countries';
import { PrismaService } from '../prisma.service';
import { Country as DbCountry } from '@prisma/client';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<Country[]> {
    const countries = await this.prismaService.country.findMany({});
    return countries.map(mapCountry);
  }

  async getOne({ cca2 }: { cca2: string }): Promise<Country | null> {
    const country = await this.prismaService.country.findFirst({
      where: { cca2 },
    });
    if (country) {
      return mapCountry(country);
    }

    return null;
  }
}

function mapCountry(country: DbCountry): Country {
  const {
    capital,
    cca2,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
  } = country;
  return {
    capital,
    cca2,
    // TODO: remove in t5
    currencies: currencies as Currencies,
    flags: flags as Flags,
    languages: languages as Languages,
    name: name as Name,
    population,
    region,
    subregion,
  };
}
