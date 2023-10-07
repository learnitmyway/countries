# t4: npm workspace

## todo

- create scoped packages with global package.json and workspaces
- base tsconfig
  - compiler options need to be individual packages
  - no need for paths and references because the packages don't depend on each other
- base eslint config or a separate package?
- see if anything can be reused from FE config files and vice versa
  - eg eslint plugins
- update 'About' on GitHub
- types as a separate package or at root or do as part of t7?
  - if they are at root can they still be typechecked, linted?
  - prisma as a separate package?
- search for `TODO: replace in t4` in code
- update adr 5

## notes

- https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true
- https://www.yieldcode.blog/post/npm-workspaces/