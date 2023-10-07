import { Country as DbCountry } from '@prisma/client';

export type Country = Omit<
  DbCountry,
  'id' | 'currencies' | 'flags' | 'languages' | 'name'
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
