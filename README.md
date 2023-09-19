# Countries

see also

- [countries-fe/README.md](countries-fe/README.md)
- [countries-be/README.md](countries-be/README.md)

## to do

- FE: add typecheck to pipeline
- BE: add typecheck to pipeline
- BE: Prisma
- FE: normalise country data

## future ideas

- BE: docker for db
- share tsconfig, eslintrc between FE and BE
- share types between FE and BE
- Read nestjs docs https://docs.nestjs.com/first-steps
- make repo public
  - review code
    - cull some features
  - disclaimer about not being prod ready
    - only works on localhost
    - lack of security (eg. cors is enabled)
    - lack of test coverage
    - lack of styling
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
- auth

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
- no need to store countries in a DB because because it's only a read operation
  - sorting/filtering/searching can be done in the FE

## lower priority

- get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`

## motivation

- get familiar with the latest tooling so I can complete coding exercises faster
