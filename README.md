# Countries

An app that displays country data using technology that I like or want to try.

Original data is from https://restcountries.com/v3.1/all, September 2023.

## Disclaimer

This app isn't production ready:

- it only works on localhost
- security hasn't been considered (eg. cors is enabled for everyone)
- test coverage is low
- UX is almost completely absent in some places

## Frontend

- `cd frontend`

### Setup

- `npm install`
- Generate new component (eg button) with `npx shadcn-ui@latest add button`

### Useful commands

- `npm run dev`
- `npm test`
- see also scripts in `package.json`

## Backend

- `cd backend`

### Setup

- `cp .env.example .env`
- `npm install`
- start db with `docker-compose up -d`
- `npm run db:reset`

### Useful commands

- `npm run start:dev`
- `npm test`
- see also scripts in `package.json`
- interact with db `docker exec --tty --interactive countries-postgres-dev psql --host=localhost --username=postgres --dbname=countries-dev`

## Architecture Decision Records

1. react-router-dom@6?
   - no. Documentation is overwhelming
   - use v5 instead
2. deno?
   - no. I don't know if it has enough traction to be worth learning yet.
3. backend framework
   - choice: nestjs
   - alternative 1: nextjs instead. No, because I thought it would be too much new at once
     - might be worth considering later
   - alternative 2: fastify. No, because its motivation is performance that that isn't a priority
4. trpc?
   - no. I think it's too new
   - might be worth considering if switching to nextjs
5. [Where should the backend live?](adr/5_where-should-the-backend-live.md)
6. deprecated: ~~no need to store countries in a DB because because it's only a read operation~~
   - ~~sorting/filtering/searching can be done in the FE~~
7. store countries in DB otherwise there are multiple data sources
8. use `@lukemorales/query-key-factory`?
   - no. I didn't understand the value
9. Should `prisma` be inside src?
   - no. It is isn't in [this example](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nestjs/prisma)
10. use zod for validation at runtime
