# t7: replace zod

Using zod instead of Omit was a good step in 298cce4 because the type is at least guaranteed. There was nothing guaranteeing that `Country` was correct. `zod` was able to guarantee that `Country` was correct, but it does validation at runtime So even though there is e2e type-safety, if the schema is incorrect, the app crashes. Also of note `transform` only happens after parsing so it doesn't solve the problem

## todo

- map the types from `DbCountry` to `Country` where `JsonValue` is something like `{nativeName: string, ...}`) in a service layer
- map null to undefined?
- write ADR