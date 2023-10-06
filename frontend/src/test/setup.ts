import { beforeEach, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import failOnConsole from "vitest-fail-on-console";

failOnConsole();

beforeEach(() => {
  vi.resetAllMocks();
});

afterEach(() => {
  cleanup();
});
