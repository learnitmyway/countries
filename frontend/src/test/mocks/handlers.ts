import { rest } from "msw";

import { getCountryUrl } from "../../countries/countriesApi";
import { Country } from "../../countries/types";
import { buildCountry } from "../builders/countryBuilder";
import { SetupServer } from "msw/node";

export const handlers = [getCountryHandler()];

export function mockGetCountry404({
  cca2,
  mockServer,
}: {
  cca2: string;
  mockServer: SetupServer;
}) {
  mockServer.use(getCountry404Handler({ cca2 }));
}

export function mockGetCountry500({ mockServer }: { mockServer: SetupServer }) {
  mockServer.use(getCountry500Handler());
}

function getCountry404Handler({ cca2 }: { cca2: string }) {
  return rest.get(getCountryUrl({ cca2 }), (_, res, ctx) =>
    res(ctx.status(404)),
  );
}

function getCountry500Handler() {
  return rest.get(getCountryUrl({ cca2: "FR" }), (_, res, ctx) =>
    res(ctx.status(500)),
  );
}

function getCountryHandler({
  country = buildCountry(),
}: { country?: Country } = {}) {
  return rest.get(getCountryUrl({ cca2: country.cca2 }), (_, res, ctx) =>
    res(ctx.status(200), ctx.json(country)),
  );
}
