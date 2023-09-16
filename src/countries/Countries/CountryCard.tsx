import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Country } from "../types";
import { joinCapitals } from "./CountryCard.util";

export const CountryCard = ({ country }: { country: Country }) => (
  <Card className="w-[250px]">
    <img
      className="h-[150px] w-[250px] object-cover"
      src={country.flags.png}
      alt={country.name.common}
    />
    <CardHeader>
      <CardTitle>{country.name.common}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>
        <span className="font-semibold">Population: </span>
        {country.population}
      </p>
      <p>
        <span className="font-semibold">Region: </span>
        {country.region}
      </p>
      <p>
        <span className="font-semibold">Capital: </span>
        {joinCapitals({ capitals: country.capital })}
      </p>
    </CardContent>
  </Card>
);
