# Countries

## useful commands

- `npm install`
- `npm run dev`
- `npm test`

## to do

- complete detail view
  - consider staleTime
- add a backend and store countries in db instead
  - rename repo to countries
  - same repo
  - NestJS
  - Prisma
  - script to fetch countries and write to db
  - add option to us local file
  - update useful commands

## future ideas

- make public
  - review code
    - cull some features
  - disclaimer about not being prod ready
    - lack of test coverage
    - shortcuts in UX (eg loading and error states)
- pagination
- search field with debounce
- polling
- filter by region
- sort countries
- dark mode
- link to border countries on detail page
- mark country as visited
- display visited countries on a map
- lazy load images
- responsiveness
- switch to nextjs (see decisions)
- switch to trpc (see decisions)
- pnpm

## decisions worth recording

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

## lower priority

- get in-source testing to work
  - reverted commit: a07273d010865ffa9035fc9931b51110e1f4e033
  - Error: `Uncaught Error: Vitest failed to access its internal state.`

## motivation

- get familiar with the latest tooling so I can complete coding exercises faster
