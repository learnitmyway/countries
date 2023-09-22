import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";
import { useCountries } from "./useCountries";

export const Countries = () => {
  const { data, isLoading, isError } = useCountries();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (data.length === 0) {
    return <p>No countries :(</p>;
  }

  return (
    <>
      <main>
        <div className="flex flex-wrap items-center justify-center">
          {data.map((country) => (
            <Link key={country.cca2} to={`/countries/${country.cca2}`}>
              <div className="flex-none p-9">
                <CountryCard country={country} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};
