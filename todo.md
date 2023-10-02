# To do

## next

- FE: fail on console
- FE: nav bar to 'Home'
- FE: lint and typecheck staged files
- BE: lint staged files

## future

- https://www.totaltypescript.com/tutorials/zod/zod-section/array/exercise
- upgrade to @tanstack/react-query v5
  - mark country as visited https://tanstack.com/query/v5/docs/react/guides/optimistic-updates
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
- pnpm
- auth
- switch to nextjs (see decisions)
- switch to trpc (see decisions)

## deprioritised

- FE: is there a better way to handle zod errors (ie instead of returning `json as Country`)?
  - Without zod the type is unknown unless `as Country` is used
  - I can't return `[]` or `null` if there is an error parsing the response because this would be the empty state instead of the error state
- BE: more specific than `Prisma.JsonValue`?
- FE: setup rtl as per docs https://testing-library.com/docs/react-testing-library/setup/
- FE: display visited countries on a map
- FE: lazy load images
- FE: responsiveness
- BE: remove typechecking from test and start
  - add typechecking to staged files
- FE: get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`
