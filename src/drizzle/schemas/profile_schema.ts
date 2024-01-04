import { varchar, mysqlTable } from "drizzle-orm/mysql-core";
import { v4 as uuid } from "uuid";
import { userTable } from "./user_schema";

export const profileTable = mysqlTable("profiles", {
  id: varchar("id", { length: 255 }).default(uuid()).primaryKey(),
  user_id: varchar("user_id", { length: 255 }).references(() => userTable.id),
  avatar: varchar("avatar", { length: 255 }),
  banner: varchar("banner", { length: 255 }),
});
