import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../countriesApi";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    staleTime: Infinity,
  });
}
