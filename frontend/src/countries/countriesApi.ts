import { get } from "../utils/httpAdapter";
import { Country, CountryListSchema, CountrySchema } from "./types";

const BASE_URL = "http://localhost:3000/countries";

export const getAllCountries = async (): Promise<Country[]> => {
  const json = await get({ url: BASE_URL });

  return CountryListSchema.parse(json);
};

export function getCountryUrl({ cca2 }: { cca2: string }) {
  return BASE_URL + `/${cca2}`;
}

export const getCountry = async ({
  cca2,
}: {
  cca2: string;
}): Promise<Country> => {
  const json = await get({ url: getCountryUrl({ cca2 }) });
  return CountrySchema.parse(json);
};
