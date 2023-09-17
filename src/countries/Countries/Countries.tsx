import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../countriesApi";
import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";

export const Countries = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-center items-center">
          {data.map((country) => (
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
