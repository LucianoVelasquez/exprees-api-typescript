-- CreateTable
CREATE TABLE "Tipogas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "electric" BOOLEAN NOT NULL,
    "gasoil" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL,
    "tipogasId" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "preci" INTEGER NOT NULL,
    CONSTRAINT "Item_tipogasId_fkey" FOREIGN KEY ("tipogasId") REFERENCES "Tipogas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_tipogasId_key" ON "Item"("tipogasId");
