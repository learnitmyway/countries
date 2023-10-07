export type Currencies = {
  [code: string]: { name: string; symbol?: string };
} | null;
export type Flags = { png: string };
export type Languages = { [code: string]: string } | null;
export type Name = {
  common: string;
  nativeName?: { [code: string]: { common: string } };
};

export type Country = {
  capital: string[];
  cca2: string;
  currencies: Currencies;
  flags: Flags;
  languages: Languages;
  name: Name;
  population: number;
  region: string;
  subregion: string | null;
};
