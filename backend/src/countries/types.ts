import { Country as DbCountry } from '@prisma/client';

// TODO: replace in t5
export type Country = Omit<
  DbCountry,
  'currencies' | 'flags' | 'languages' | 'name'
> & {
  currencies: {
    [code: string]: { name: string; symbol?: string };
  } | null;
  flags: { png: string };
  languages: { [code: string]: string } | null;
  name: {
    common: string;
    nativeName?: { [code: string]: { common: string } };
  };
};
