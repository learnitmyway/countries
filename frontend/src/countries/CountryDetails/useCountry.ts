import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCountry } from "../countriesApi";
import { countryKeys } from "../countryQueryKeys";
import { Country } from "../types";

export function useCountry({ cca2 }: { cca2: string }) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: countryKeys.detail({ cca2 }),
    queryFn: () => getCountry({ cca2 }),
    initialData: () => {
      const state = queryClient.getQueryState<Country[]>(countryKeys.list());
      if (state?.data && state.data.length > 0) {
        return state.data.find((country) => country.cca2 === cca2);
      }
    },
    initialDataUpdatedAt: () =>
      queryClient.getQueryState(countryKeys.list())?.dataUpdatedAt,
    staleTime: Infinity,
  });
}
