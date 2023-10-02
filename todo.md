# To do

## next

- FE: fail on console
- FE: nav bar to 'Home'
- FE: try eslint-plugin-unicorn

## future

- FE: linting seems slow
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

- lint-staged https://github.com/okonet/lint-staged
  - see attempt in stash
  - husky doesn't work if there is no git directory (eg in `frontend`)
  - run with `npx lint-staged` doesn't pick up tsconfig
  - FE: lint and typecheck staged files
  - BE: lint staged files
- BE: respond with `undefined` instead of `null`?
- BE: more specific than `Prisma.JsonValue`?
- FE: setup rtl as per docs https://testing-library.com/docs/react-testing-library/setup/
- FE: display visited countries on a map
- FE: lazy load images
- FE: responsiveness
- BE: remove typechecking from test and start
- FE: get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`
