import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "./countriesApi";
import { CountryCard } from "./CountryCard";

export const Countries = () => {
  const query = useQuery({
    queryKey: ["countires"],
    queryFn: getAllCountries,
  });

  return (
    <div>
      <ul>
        {query.data?.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </ul>
    </div>
  );
};
