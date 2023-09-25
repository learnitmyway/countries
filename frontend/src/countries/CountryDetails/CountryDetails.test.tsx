import { describe, expect, it } from "vitest";
import { CountryDetails } from "./CountryDetails";
import { createQueryClient, customRender } from "../../test/customRender";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { countryKeys } from "../countryQueryKeys";
import { buildCountry } from "../../test/builders/countryBuilder";

describe("CountryDetails", () => {
  it("fetches country and renders title", async () => {
    customRender(<CountryDetails />, {
      route: "/countries/FR",
      path: "/countries/:cca2",
    });

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    expect(screen.getByText("France", { selector: "h1" })).toBeInTheDocument();
  });

  it("renders country title from cache", () => {
    const queryClient = createQueryClient();
    queryClient.setQueryData(countryKeys.list(), [buildCountry()]);

    customRender(<CountryDetails />, {
      route: "/countries/FR",
      path: "/countries/:cca2",
      queryClient,
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("France", { selector: "h1" })).toBeInTheDocument();
  });
});
