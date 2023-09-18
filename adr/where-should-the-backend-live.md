# ADR - Where should the backend live?

## options

1. no: create frontend and backend folders with shared configs, package.json
  - con: change file paths
  - how to handle npm scripts?
2. no: create frontend and backend folders with own configs but share package.json
  - con: change file paths
  - con: no shared configs
  - pro: might be less effort than sharing
  - how to handle npm scripts?
3. yes: create frontend and backend folders with own configs and package.json
  - con: change file paths
  - con: no shared configs
4. maybe: create frontend and backend folders with shared configs, but unique package.json (npm workspaces?)
  - con: change file paths
  - pro: potentially the best solution
  - con: potentially most effort
5. no: only create backend folder at root with shared configs, but share package.json
  - pro: no change of file paths
  - con: duplicate configs
  - con: confusing
  - how would I differentiate between configs?
    - maybe I could exclude `backend`?
6. no: create server folder within src like t3-app
  - pro: no change of file paths
  - con: duplicate configs
  - con: doesn't make sense
    - I think the difference is that NextJS is serving the BE and FE
  - how would I differentiate between configs?
    - maybe I could exclude `src/server`?
7. maybe: separate repo
  - pro: most familiar
  - pro: no commit-message prefix needed
  - con: nothing is shared
  - con: can only rollback separately

## decision

Start with Option 3 and add Option 4 to the backlog



