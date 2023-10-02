const countriesPath = "/countries";
const countryDetailsPath = "/countries/:cca2";

export const paths = {
  countryDetails: countryDetailsPath,
  countries: countriesPath,
};

export const links = {
  countries: countriesPath,
  countryDetails: countryDetailsLink,
};

function countryDetailsLink({ cca2 }: { cca2: string }) {
  return `/countries/${cca2}`;
}
