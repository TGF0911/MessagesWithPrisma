# Migration `20200522103846-create_message`

This migration has been generated by TGF0911 at 5/22/2020, 10:38:46 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Message" (
"content" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"title" TEXT NOT NULL  ,"userId" INTEGER NOT NULL  ,FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200522103746-create_user..20200522103846-create_message
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
@@ -10,6 +10,14 @@
 model User {
   id      Int       @default(autoincrement()) @id
   name    String
   email   String
+  Message Message[]
 }
+model Message {
+  id      Int    @default(autoincrement()) @id
+  title   String
+  content String
+  user    User   @relation(fields: [userId], references: [id])
+  userId  Int
+}
```

