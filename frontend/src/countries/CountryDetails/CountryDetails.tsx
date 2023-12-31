import { useParams } from "react-router-dom";
import { joinList } from "../Countries/joinList";
import { useCountry } from "./useCountry";
import { NotFoundError } from "@/utils/NotFoundError";
import { LinkButton } from "@/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { links } from "../../App/routeUtils";

interface RouteParams {
  cca2: string;
}

export function CountryDetails() {
  const { cca2 } = useParams<RouteParams>();
  const { data: country, isLoading, error } = useCountry({ cca2 });

  // FIXME: tell TS that this is is not always false
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof NotFoundError) {
    return <p>Not Found</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  // TODO: is there a way to avoid this check? I don't know how it could be possible
  if (!country) {
    return;
  }

  const nativeNames =
    country.name.nativeName &&
    Object.values(country.name.nativeName).map((entry) => entry.common);

  const languages = country.languages && Object.values(country.languages);

  return (
    <main>
      <LinkButton to={links.countries}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </LinkButton>
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
