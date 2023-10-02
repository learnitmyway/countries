import { get } from "../utils/httpAdapter";
import { logError } from "@/utils/logger";
import { Country, CountryListSchema, CountrySchema } from "./types";

const BASE_URL = "http://localhost:3000/countries";

export const getAllCountries = async (): Promise<Country[]> => {
  const json = await get({ url: BASE_URL });

  const result = CountryListSchema.safeParse(json);
  if (!result.success) {
    logError(result.error);
    return json as Country[];
  } else {
    return result.data;
  }
};

export function getCountryUrl({ cca2 }: { cca2: string }) {
  return BASE_URL + `/${cca2}`;
}

export const getCountry = async ({ cca2 }: { cca2: string }) => {
  const json = await get({ url: getCountryUrl({ cca2 }) });
  const result = CountrySchema.safeParse(json);
  if (!result.success) {
    logError(result.error);
    return json as Country;
  } else {
    return result.data;
  }
};
