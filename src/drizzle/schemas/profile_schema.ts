import { varchar, mysqlTable, index } from "drizzle-orm/mysql-core";
import { userTable } from "./user_schema";

export const profileTable = mysqlTable(
  "profiles",
  {
    id: varchar("id", { length: 255 }).notNull().primaryKey(),
    user_id: varchar("user_id", { length: 255 }).references(
      () => userTable.id,
      {
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    ),
    avatar: varchar("avatar", { length: 255 }),
    banner: varchar("banner", { length: 255 }),
  },
  (table) => {
    return {
      userIdIdx: index("userIdIdx").on(table.user_id),
    };
  },
);
