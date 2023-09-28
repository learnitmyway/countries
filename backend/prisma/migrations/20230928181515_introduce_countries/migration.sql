/*
  Warnings:

  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_fkey";

-- DropTable
DROP TABLE "posts";

-- DropTable
DROP TABLE "profiles";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "capital" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cca2" TEXT NOT NULL,
    "flags" JSONB NOT NULL,
    "population" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "subregion" TEXT,
    "currencies" JSONB NOT NULL,
    "languages" JSONB NOT NULL,
    "name" JSONB NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);
