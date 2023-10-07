# t7: map country

Using zod instead of Omit was a good step in 298cce4 because the type is at least guaranteed. There was nothing guaranteeing that `Country` was correct. `zod` was able to guarantee that `Country` was correct, but it does validation at runtime. So even though there is e2e type-safety, if the schema is incorrect, the app crashes. Also of note `transform` only happens after parsing so it doesn't solve the problem. However, we still need zod for the JsonValues because AFAIK these can't be validated by postgres. An alternative would be to create separate tables (eg for flags), but then I would have to migrate the data and every select would require multiple joins

## todo

- revert last commit
- map null to undefined
- fix BE tests
- write ADR