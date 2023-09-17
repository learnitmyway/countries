import { expect, test } from "vitest";
import { joinCapitals } from "./CountryCard.util";

test("joins capitals", () => {
  expect(joinCapitals({ capitals: undefined })).toBe("");
  expect(joinCapitals({ capitals: ["foo", "bar"] })).toBe("foo, bar");
});
