import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../countriesApi";

export function useCountries({ enabled = true } = {}) {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    staleTime: Infinity,
    placeholderData: [],
    enabled,
  });
}
