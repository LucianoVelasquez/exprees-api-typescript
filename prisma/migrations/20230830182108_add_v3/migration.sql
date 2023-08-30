/*
  Warnings:

  - Made the column `year` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL,
    "gas" TEXT,
    "year" TEXT NOT NULL,
    "description" TEXT,
    "preci" INTEGER NOT NULL
);
INSERT INTO "new_Item" ("color", "description", "gas", "id", "preci", "year") SELECT "color", "description", "gas", "id", "preci", "year" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
