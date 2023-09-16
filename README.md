# Countries

## useful commands

- `npm install`
- `npm run dev`

## to do

- set up vitest
- setup circle ci pipeline
- complete detail view
  - consider staleTime
- add a backend and store countries in db instead
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
    - lack of loading, error, states etc
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

## motivation

- get familiar with the latest tooling so I can complete coding exercises faster
