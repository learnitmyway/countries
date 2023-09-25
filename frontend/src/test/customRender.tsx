import React from "react";
import { History } from "history";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const customRender = (
  children: React.ReactNode,
  {
    route = "/",
    path = route,
    history = createMemoryHistory({ initialEntries: [route] }),
    queryClient = createQueryClient(),
  }: {
    route?: string;
    path?: string;
    history?: History;
    queryClient?: QueryClient;
  } = {},
) => {
  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Route path={path} render={() => children} />
        </Router>
      </QueryClientProvider>,
    ),
    history,
  };
};

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}
