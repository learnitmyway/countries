import { describe, expect, it } from "vitest";
import { CountryDetails } from "./CountryDetails";
import { createQueryClient, customRender } from "@/test/customRender";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { countryKeys } from "../countryQueryKeys";
import { buildCountry } from "@/test/builders/countryBuilder";
import { mockGetCountry404, mockGetCountry500 } from "@/test/mocks/handlers";
import { QueryClient } from "@tanstack/react-query";
import { setupMockServer } from "@/test/mocks/server";
import { links, paths } from "@/App/routeUtils";

describe("CountryDetails", () => {
  const mockServer = setupMockServer();
  it("fetches country and renders title", async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    expect(screen.getByText("France", { selector: "h1" })).toBeInTheDocument();
  });

  it("renders country title from cache", () => {
    const queryClient = createQueryClient();
    queryClient.setQueryData(countryKeys.list(), [buildCountry()]);

    setup({ queryClient });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("France", { selector: "h1" })).toBeInTheDocument();
  });

  it('renders "Not Found" when country is not found', async () => {
    const cca2 = "JJ";
    mockGetCountry404({ mockServer, cca2 });

    setup({ cca2: "JJ" });

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("renders generic error", async () => {
    mockGetCountry500({ mockServer });

    setup();
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});

function setup({
  cca2 = "FR",
  queryClient,
}: { cca2?: string; queryClient?: QueryClient } = {}) {
  customRender(<CountryDetails />, {
    route: links.countryDetails({ cca2 }),
    path: paths.countryDetails,
    queryClient,
  });
}
