import { useParams } from "react-router-dom";
import { useCountries } from "../Countries/useCountries";
import { joinList } from "../Countries/util";

interface RouteParams {
  name: string;
}

export function CountryDetails() {
  const { data, isLoading, isError } = useCountries();
  const { name } = useParams<RouteParams>();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const country = data.find((country) => country.name.common === name);

  if (!country) {
    return <p>Not found</p>;
  }

  const nativeNames = Object.values(country.name.nativeName).map(
    (entry) => entry.common,
  );

  const languages = Object.values(country.languages);

  return (
    <main>
      <h1 className="mb-2 text-xl">{name}</h1>
      <Attribute
        title="Native names"
        content={joinList({ list: nativeNames })}
      />
      <Attribute title="Population" content={country.population} />
      <Attribute title="Region" content={country.region} />
      <Attribute title="Sub Region" content={country.subregion} />
      <Attribute
        title="Capitals"
        content={joinList({ list: country.capital })}
      />
      <Attribute title="Languages" content={joinList({ list: languages })} />
    </main>
  );
}

function Attribute({
  title,
  content,
}: {
  title: string;
  content: string | number;
}) {
  return (
    <p>
      <span className="font-semibold">{title}: </span>
      {content}
    </p>
  );
}
