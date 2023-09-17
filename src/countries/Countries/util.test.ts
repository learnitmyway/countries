import { expect, test } from "vitest";
import { joinList } from "./util";

test("joins capitals", () => {
  expect(joinList({ list: undefined })).toBe("");
  expect(joinList({ list: ["foo", "bar"] })).toBe("foo, bar");
});
