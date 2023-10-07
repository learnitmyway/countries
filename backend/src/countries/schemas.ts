import { z } from 'zod';

export const CurrenciesSchema = z
  .record(
    z.object({
      name: z.string(),
      symbol: z.string().optional(),
    }),
  )
  .optional();

export const FlagsSchema = z.object({
  png: z.string(),
});

export const LanguagesSchema = z.record(z.string()).optional();

export const NameSchema = z.object({
  common: z.string(),
  nativeName: z
    .record(
      z.object({
        common: z.string(),
      }),
    )
    .optional(),
});
