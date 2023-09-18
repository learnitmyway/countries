export type Country = {
  capital?: string[];
  currencies?: {
    [code: string]: { name: string; symbol?: string } | undefined;
  };
  flags: { png: string };
  languages?: { [key: string]: string | undefined };
  name: {
    common: string;
    nativeName?: { [code: string]: { common: string } | undefined };
  };
  population: number;
  region: string;
  subregion?: string;
};
