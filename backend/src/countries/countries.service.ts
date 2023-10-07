import { Injectable } from '@nestjs/common';
import { Country } from '../types/countries';
import { PrismaService } from '../prisma.service';
import { Country as DbCountry } from '@prisma/client';
import {
  CurrenciesSchema,
  FlagsSchema,
  LanguagesSchema,
  NameSchema,
} from './schemas';
import { replaceNullWithUndefined } from '../util/nullToUndefined';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const countries = await this.prismaService.country.findMany({});
    return countries.map((element) => toCountry(element));
  }

  async getOne({ cca2 }: { cca2: string }) {
    const country = await this.prismaService.country.findFirst({
      where: { cca2 },
    });
    if (country) {
      return toCountry(country);
    }
    return;
  }
}

function toCountry(country: DbCountry): Country {
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
  } = replaceNullWithUndefined(country);
  return {
    capital,
    cca2,
    currencies: CurrenciesSchema.parse(currencies),
    flags: FlagsSchema.parse(flags),
    languages: LanguagesSchema.parse(languages),
    name: NameSchema.parse(name),
    population,
    region,
    subregion,
  };
}
