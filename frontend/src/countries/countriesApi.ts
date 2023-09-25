import { fetchJson } from "../utils/fetchJson";
import { Country } from "./types";

const BASE_URL = "http://localhost:3000/countries";

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchJson({ url: BASE_URL });
};

export function getCountryUrl({ cca2 }: { cca2: string }) {
  return BASE_URL + `/${cca2}`;
}

export const getCountry = async ({
  cca2,
}: {
  cca2: string;
}): Promise<Country> => {
  return await fetchJson({ url: getCountryUrl({ cca2 }) });
};
