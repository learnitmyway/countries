import { z } from "zod";

export const CountrySchema = z.object({
  capital: z.array(z.string()).optional(),
  cca2: z.string(),
  currencies: z
    .record(
      z.object({
        name: z.string(),
        symbol: z.string().optional(),
      }),
    )
    .optional()
    .nullable(),
  flags: z.object({
    png: z.string(),
  }),
  languages: z.record(z.string()).optional().nullable(),
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
  subregion: z.string().optional().nullable(),
});

export const CountryListSchema = z.array(CountrySchema);

export type Country = z.infer<typeof CountrySchema>;
