import { Country } from "src/countries/types";

export function buildCountry(): Country {
  return {
    name: {
      common: "France",
      nativeName: {
        fra: { common: "France" },
      },
    },
    cca2: "FR",
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    capital: ["Paris"],
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
    },
    region: "Europe",
    subregion: "Western Europe",
    languages: { fra: "French" },
    population: 67391582,
  };
}
