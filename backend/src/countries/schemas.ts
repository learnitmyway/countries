import { z } from 'zod';

export const CountrySchema = z.object({
  capital: z.array(z.string()),
  cca2: z.string(),
  currencies: z
    .record(
      z.object({
        name: z.string(),
        symbol: z.string().optional(),
      }),
    )
    .nullable(),
  flags: z.object({
    png: z.string(),
  }),
  languages: z.record(z.string()).nullable(),
  name: z.object({
    common: z.string(),
    nativeName: z
      .record(
        z.object({
          common: z.string(),
        }),
      )
      .optional(),
  }),
  population: z.number(),
  region: z.string(),
  subregion: z.string().nullable(),
});

export const CountryListSchema = z.array(CountrySchema);
