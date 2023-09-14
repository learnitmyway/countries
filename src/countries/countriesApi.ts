import { fetchWrapper } from "../utils/fetchWrapper";
import { Country } from "./types";

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchWrapper({ url: "https://restcountries.com/v3.1/all" });
};
