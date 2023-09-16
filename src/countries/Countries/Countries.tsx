import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../countriesApi";
import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";

export const Countries = () => {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-center items-center">
          {query.data?.map((country) => (
            <Link
              key={country.name.common}
              to={`/countries/${country.name.common}`}
            >
              <div className="p-9 flex-none">
                <CountryCard country={country} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};
