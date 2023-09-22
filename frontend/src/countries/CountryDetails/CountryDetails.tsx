import { useParams } from "react-router-dom";
import { joinList } from "../Countries/util";
import { useCountry } from "./useCountry";
import { NotFoundError } from "../../utils/NotFoundError";

interface RouteParams {
  cca2: string;
}

export function CountryDetails() {
  const { cca2 } = useParams<RouteParams>();
  const { country, isFetching, error } = useCountry({ cca2 });

  if (!country && isFetching) {
    return <p>Loading...</p>;
  }

  if (!country && error) {
    if (error instanceof NotFoundError) {
      return <p>Not Found</p>;
    }
    return <p>Error</p>;
  }

  if (!country) {
    return null;
  }

  const nativeNames =
    country.name.nativeName &&
    Object.values(country.name.nativeName).map((entry) => entry.common);

  const languages = country.languages && Object.values(country.languages);

  return (
    <main>
      <h1 className="mb-2 text-xl">{country.name.common}</h1>
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
  content?: string | number;
}) {
  return (
    <p>
      <span className="font-semibold">{title}: </span>
      {content}
    </p>
  );
}
