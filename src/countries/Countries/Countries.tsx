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
