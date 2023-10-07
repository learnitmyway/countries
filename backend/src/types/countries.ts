import { z } from 'zod';
import { CountrySchema } from '../countries/schemas';

export type Country = z.infer<typeof CountrySchema>;
