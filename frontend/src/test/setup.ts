import { beforeEach, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

beforeEach(() => {
  vi.resetAllMocks();
});

afterEach(() => {
  cleanup();
});
