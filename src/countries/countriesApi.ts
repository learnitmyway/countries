import { fetchWrapper } from "../utils/fetchWrapper";

type Country = {
  name: { common: string; official: string };
  capital: string[];
  population: number;
};

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchWrapper({ url: "https://restcountries.com/v3.1/all" });
};
