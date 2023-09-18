import { fetchWrapper } from "../utils/fetchWrapper";
import { Country } from "./types";

export const getAllCountries = async (): Promise<Country[]> => {
  return await fetchWrapper({ url: "http://localhost:3000/countries" });
};
