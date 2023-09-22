import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../countriesApi";
import { countryKeys } from "../countryQueryKeys";

export function useCountries({ enabled = true } = {}) {
  return useQuery({
    queryKey: countryKeys.list(),
    queryFn: getAllCountries,
    staleTime: Infinity,
    placeholderData: [],
    enabled,
  });
}
