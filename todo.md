# To do

## next

- FE: add some tests to CountryDetail
  - no initialData
  - with initialData
  - not found
  - generic error
- store countries in db
- mark country as visited
  - instead of updating the cache optimistically try displaying the state change in the UI
    - see https://tanstack.com/query/latest/docs/react/guides/optimistic-updates and https://tanstack.com/query/v5/docs/react/guides/optimistic-updates

## future

- try zod https://tkdodo.eu/blog/type-safe-react-query
- share tsconfig, eslintrc between FE and BE
- share types between FE and BE
- pagination
- polling
- search field with debounce
- filter by region
- sort countries
- dark mode with shadcnui
- detail page
  - link to border countries on detail page
  - back
- pnpm
- auth
- switch to nextjs (see decisions)
- switch to trpc (see decisions)

## deprioritised

- display visited countries on a map
- lazy load images
- responsiveness
- BE: remove typechecking from test and start
- FE: get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`
