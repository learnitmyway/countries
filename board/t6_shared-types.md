# Shared types

## decisions

- Can I use zod to map from PrismaCountry to Country? 
  - I don't know if that makes sense because we already know the types at build time
- Revert commit 37cb5d7
  - in fronted/tsconfig there was a line `"@backend/*": ["../backend/*"]`, which can lead to the frontend importing the backend code in the build artifact

## todo 

- same as 37cb5d7, but only allow FE to import types
- remove zod since we already know the type at buildtime
- Do types have to be in a separate package? If they are at the root they won't be linted or type checked, will they? or do as part of t4?
- Should I put prisma in a separate package or do it as part of t4?

## notes
