# To do

## next

- response with `{data: countries}`

## future

- upgrade to @tanstack/react-query v5
  - https://tanstack.com/query/v5/docs/react/guides/migrating-to-v5
  - mark country as visited https://tanstack.com/query/v5/docs/react/guides/optimistic-updates
- BE: separate countries.module?
- run app locally with docker using production builds
- FE: linting seems slow
- t4: npm workspace
- t7: e2e type-safety
- pagination
- polling
- search field with debounce
- filter by region
- sort countries
- dark mode with shadcnui
- pnpm
- auth
- switch to nextjs (see decisions)

## deprioritised

- BE: separate prettier from linter
- FE: link to border countries on detail page
- BE: fail on console
- FE: setup rtl as per docs https://testing-library.com/docs/react-testing-library/setup/
- FE: display visited countries on a map
- FE: lazy load images
- t1: lint-staged
- t2: in-source-testing
- t3: FE: fail-on-console
- t5: BE: more specific than `Prisma.JsonValue`?