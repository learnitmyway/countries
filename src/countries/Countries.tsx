import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getAllCountries } from "./countriesApi";

export const Countries: FC = () => {
  const query = useQuery({
    queryKey: ["countires"],
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
