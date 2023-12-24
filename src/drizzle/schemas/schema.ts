import {
  int,
  boolean,
  mysqlTable,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

export const userTable = mysqlTable("users", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  fullname: varchar("fullname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  isVerified: boolean("is_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userProfile = relations(userTable, ({ one }) => ({
  profile: one(profileTable),
}));

export const profileTable = mysqlTable("profiles", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  username: varchar("username", { length: 255 }).notNull(),
  profilePicture: varchar("profile_picture", { length: 255 }).notNull(),
  userId: int("user_id")
    .unique()
    .references(() => userTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});
