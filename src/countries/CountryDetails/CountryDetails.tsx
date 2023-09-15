import { useParams } from "react-router-dom";

interface RouteParams {
  name: string;
}

export function CountryDetails() {
  const { name } = useParams<RouteParams>();
  return (
    <main>
      <h1>{name}</h1>
    </main>
  );
}
