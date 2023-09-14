import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Country } from "./types";

export const CountryCard = ({ country }: { country: Country }) => (
  <Card className="w-fit">
    <img
      className="h-[150px] w-[250px] object-cover"
      src={country.flags.png}
      alt={country.name.common}
    />
    <CardHeader>
      <CardTitle>{country.name.common}</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);
