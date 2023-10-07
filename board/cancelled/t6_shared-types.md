# Shared types

superseded by t7

## decisions

- Revert commit 37cb5d7
  - in fronted/tsconfig there was a line `"@backend/*": ["../backend/*"]`, which can lead to the frontend importing the backend code in the build artifact