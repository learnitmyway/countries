import { describe, expect, it } from "vitest";
import { joinList } from "./joinList";

describe("joinList", () => {
  it("joins capitals", () => {
    expect(joinList({ list: undefined })).toBe("");
    expect(joinList({ list: ["foo", "bar"] })).toBe("foo, bar");
  });
});
