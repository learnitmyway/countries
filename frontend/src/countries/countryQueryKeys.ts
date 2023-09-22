export const countryKeys = {
  all: ["countries"] as const,
  lists: () => [...countryKeys.all, "list"] as const,
  list: ({ filters }: { filters?: string } = {}) =>
    [...countryKeys.lists(), { filters }] as const,
  details: () => [...countryKeys.all, "detail"] as const,
  detail: ({ cca2 }: { cca2: string }) =>
    [...countryKeys.details(), cca2] as const,
};
