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

  return (
    <>
      <main>
        <div className="flex flex-wrap items-center justify-center">
          {data.map((country) => (
            <Link
              key={country.name.common}
              to={`/countries/${country.name.common}`}
            >
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