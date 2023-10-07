import { z } from 'zod';
import {
  CurrenciesSchema,
  FlagsSchema,
  LanguagesSchema,
  NameSchema,
} from '../countries/schemas';

export type Country = {
  capital: string[];
  cca2: string;
  currencies: z.infer<typeof CurrenciesSchema>;
  flags: z.infer<typeof FlagsSchema>;
  languages: z.infer<typeof LanguagesSchema>;
  name: z.infer<typeof NameSchema>;
  population: number;
  region: string;
  subregion: string | null;
};
