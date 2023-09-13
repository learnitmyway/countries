import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "./countriesApi";

export const Countries = () => {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return (
    <div>
      <ul>
        {query.data?.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};
