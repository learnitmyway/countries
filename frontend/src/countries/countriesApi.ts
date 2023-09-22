import { fetchJson } from "../utils/fetchJson";
import { Country } from "./types";

const baseUrl = "http://localhost:3000/countries";

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchJson({ url: baseUrl });
};

export const getCountry = async ({
  cca2,
}: {
  cca2: string;
}): Promise<Country> => {
  return await fetchJson({ url: baseUrl + `/${cca2}` });
};
