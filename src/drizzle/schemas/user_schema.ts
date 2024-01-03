import {
  int,
  varchar,
  boolean,
  mysqlTable,
  date,
  timestamp,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { profileTable } from "./profile_schema";

export const userTable = mysqlTable("users", {
  id: varchar("id", { length: 255 }).default(uuid()).primaryKey(),
  visible_name: varchar("visible_name", { length: 255 }),
  username: varchar("username", { length: 255 }).unique().notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  verified: boolean("verified").default(false),
  birthdayDate: date("birthday_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const usersRelations = relations(userTable, ({ one }) => ({
  profile: one(profileTable),
}));
