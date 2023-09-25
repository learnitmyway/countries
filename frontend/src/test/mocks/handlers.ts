import { rest } from "msw";

import { getCountryUrl } from "../../countries/countriesApi";
import { Country } from "../../countries/types";
import { buildCountry } from "../builders/countryBuilder";

export const handlers = [getCountryHandler()];

function getCountryHandler({
  country = buildCountry(),
}: { country?: Country } = {}) {
  return rest.get(getCountryUrl({ cca2: country.cca2 }), (_, res, ctx) =>
    res(ctx.status(200), ctx.json(country)),
  );
}
