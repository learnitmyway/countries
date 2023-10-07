# t5: BE: more specific than `Prisma.JsonValue`?

## todo

- try https://www.npmjs.com/package/prisma-json-types-generator
- does it make sense to map the types (eg from `JsonValue` to `{nativeName: string, ...}`) in a service layer or use zod instead?
- map null to undefined?