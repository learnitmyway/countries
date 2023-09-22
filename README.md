# Countries

An app that displays country data using technology that I like or want to try.

Original data is from https://restcountries.com/v3.1/all, September 2023.

This app isn't production ready:

- it only works on localhost
- security hasn't been considered (eg. cors is enabled for everyone)
- test coverage is low
- UX is almost completely absent in some places

## frontend

- `cd frontend`

### setup

- `npm install`
- Generate new component (eg button) with `npx shadcn-ui@latest add button`

### useful commands

- `npm run dev`
- `npm test`
- see also scripts in `package.json`

## backend

- `cd backend`

### setup

- `cp .env.example .env`
- `npm install`
- start db with `docker-compose up -d`
- `npm run db:reset`

### useful commands

- `npm run start:dev`
- `npm test`
- see also scripts in `package.json`
- interact with db `docker exec --tty --interactive countries-postgres-dev psql --host=localhost --username=postgres --dbname=countries-dev`

## ADRs

- react-router-dom@5
  - documentation of react-router-dom@6 was overwhelming
- no deno because I don't think there aren't many companies using it
- backend framework
  - choice: nestjs
  - alternative 1: nextjs instead. No, because I thought it would be too much new at once
    - might be worth considering later
  - alternative 2: fastify. No because its motivation is performance that that isn't a priority
- no trpc because I think it's too new
  - might be worth considering if switching to nextjs
- [where-should-the-backend-live](adr/where-should-the-backend-live.md)
- no need to store countries in a DB because because it's only a read operation
  - sorting/filtering/searching can be done in the FE
