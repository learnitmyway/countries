# t7: e2e type safety

## what hasn't worked

- In https://github.com/learnitmyway/countries/commit/37cb5d792441176d0b3e5cbd8cf6cea66a050d04 I create the type in the BE and import it in the FE with `"@backend/*": ["../backend/*"]`, but this imports the whole BE
- In https://github.com/learnitmyway/countries/commit/2aafa8eefb21019d93f23e0e3f31c4164d10d3c5 I only import `"@backend/src/types/*": ["../backend/src/types/*"]` but later found at that the linter gets confused on circle ci and the typechecking gets confused in vscode and circle ci

## decisions

- use zod for `JsonValue`s because AFAIK these can't be validated by postgres. An alternative would be to create separate tables (eg for flags), but then I would have to migrate the data and every select would require multiple joins
- create a service layer for mapping so that at least some types can be checked at build time. It would be possible to do the mapping and whole validation with zod, but if the schema is incorrect the app crashes.

## done

- service layer
- only use zod for `JsonValue`s
- replace null with undefined

## todo

- use optional types for keys with no children to increase resilience?
- extend omitted PrimsaCountry instead?
  - see https://github.com/learnitmyway/countries/commit/2aafa8eefb21019d93f23e0e3f31c4164d10d3c5#diff-1d43a7051f09ebaee5bf7d373d5bedacf23288010bbab3001f154217ce906898R3
- try again after t4?
- write ADR?