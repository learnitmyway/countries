export type Country = {
  capital?: string[];
  currencies?: {
    [code: string]: { name: string; symbol?: string };
  };
  flags: { png: string };
  languages?: { [code: string]: string };
  name: {
    common: string;
    nativeName?: { [code: string]: { common: string } };
  };
  population: number;
  region: string;
  subregion?: string;
};
