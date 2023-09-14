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
      <div className="flex flex-wrap justify-center">
        {query.data?.map((country) => (
          <div key={country.name.common} className="p-9 flex-none">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};
