# Migration `20200522205335-uptade_message`

This migration has been generated by TGF0911 at 5/22/2020, 8:53:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE UNIQUE INDEX "quaint"."Message.title" ON "Message"("title")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200522111013-update_user..20200522205335-uptade_message
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -15,9 +15,9 @@
 }
 model Message {
   id      Int    @default(autoincrement()) @id
-  title   String
+  title   String  @unique
   content String
   user    User   @relation(fields: [userId], references: [id])
   userId  Int
 }
```


