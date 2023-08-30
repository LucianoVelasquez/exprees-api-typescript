/*
  Warnings:

  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
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
