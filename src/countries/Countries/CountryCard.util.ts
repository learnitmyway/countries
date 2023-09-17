import { expect, test } from "vitest";

export function joinCapitals({ capitals }: { capitals?: string[] }) {
  return capitals?.join(", ") ?? "";
}

if (import.meta.vitest) {
  test("joins capitals", () => {
    expect(joinCapitals({ capitals: undefined })).toBe("");
    expect(joinCapitals({ capitals: ["foo", "bar"] })).toBe("foo, bar");
  });
}
