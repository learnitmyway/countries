import { PrismaClient } from '@prisma/client';
import * as data from './data.json';

const prisma = new PrismaClient();

async function main() {
  const tableNames = ['countries'];
  for (const tableName of tableNames)
    await prisma.$queryRawUnsafe(
      `Truncate "${tableName}" restart identity cascade;`,
    );
  const countries = data;
  for (const country of countries) {
    const {
      capital,
      cca2,
      currencies,
      flags,
      languages,
      name,
      population,
      region,
      subregion,
    } = country;
    await prisma.country.createMany({
      data: [
        {
          capital,
          cca2,
          currencies,
          flags,
          languages,
          name,
          population,
          region,
          subregion,
        },
      ],
    });
  }
  const countriesInDb = await prisma.country.findMany({});
  console.dir(countriesInDb, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
