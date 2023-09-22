import { fetchWrapper } from "../utils/fetchWrapper";
import { Country } from "./types";

const baseUrl = "http://localhost:3000/countries";

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchWrapper({ url: baseUrl });
};

export const getCountry = async ({
  cca2,
}: {
  cca2: string;
}): Promise<Country | undefined> => {
  return await fetchWrapper({ url: baseUrl + `/${cca2}` });
};
