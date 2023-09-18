# Countries

## to do

- add a backend and store countries
  - NestJS
  - script to fetch countries and write to db
    - what if we just parse the json file instead?
      - check which field is unique. Start with `two letters`. If nothing is unique generate a \_\_\_ to uid map and test that each country has an id
- FE: move .gitignore
- FE: normalise country data
- share tsconfig, eslintrc, .nvmrc b/w fe and be

## future ideas

- Prisma
- make repo public
  - review code
    - cull some features
  - disclaimer about not being prod ready
    - lack of test coverage
    - lack of styling
- pagination
- search field with debounce
- polling
- filter by region
- sort countries
- dark mode
- detail page
  - link to border countries on detail page
  - back
- mark country as visited
- display visited countries on a map
- lazy load images
- responsiveness
- switch to nextjs (see decisions)
- switch to trpc (see decisions)
- pnpm

## ADRs

- react-router-dom@5
  - documentation of react-router-dom@6 was overwhelming
- no deno because there aren't many companies using it
- backend framework
  - choice: nestjs
  - alternative 1: nextjs instead. No, because I thought it would be too much new at once
    - might be worth considering later
  - alternative 2: fastify. No because its motivation is performacne
- no trpc because I think it's too new
  - might be worth considering if switching to nextjs
- [where-should-the-backend-live](adr/where-should-the-backend-live.md)

## lower priority

- get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`

## motivation

- get familiar with the latest tooling so I can complete coding exercises faster
