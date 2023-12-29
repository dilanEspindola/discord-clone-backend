import {
  int,
  boolean,
  mysqlTable,
  varchar,
  timestamp,
  date,
} from "drizzle-orm/mysql-core";

export const userTable = mysqlTable("users", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  nameDIsplay: varchar("name_display", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  isVerified: boolean("is_verified").default(false),
  profilePicture: varchar("profile_picture", { length: 255 }),
  birthdayDate: date("birthday_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
