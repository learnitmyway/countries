import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../countriesApi";
import { useCountries } from "../Countries/useCountries";
import { countryKeys } from "../countryQueryKeys";

export function useCountry({ cca2 }: { cca2: string }) {
  const query = useQuery({
    queryKey: countryKeys.detail({ cca2 }),
    queryFn: () => getCountry({ cca2 }),
    staleTime: Infinity,
  });

  // if there is already data from the list, use it,
  // but don't refetch because we are fetching the detail instead
  const { data } = query;
  const { data: allCountriesData } = useCountries({ enabled: false });
  const country = data ? data : allCountriesData?.find((c) => c.cca2 === cca2);

  return {
    ...query,
    country,
  };
}
