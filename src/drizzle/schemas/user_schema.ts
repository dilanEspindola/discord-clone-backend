import {
  varchar,
  boolean,
  mysqlTable,
  date,
  timestamp,
  mysqlEnum,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { profileTable } from "./profile_schema";

export const userTable = mysqlTable("users", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  visible_name: varchar("visible_name", { length: 255 }),
  username: varchar("username", { length: 255 }).unique().notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  verified: boolean("verified").default(false),
  birthdayDate: date("birthday_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  role: mysqlEnum("role", ["admin", "user"]),
});

export const usersRelations = relations(userTable, ({ one }) => ({
  profile: one(profileTable),
}));

// create table users(
//   id int auto_increment not null,
//   username varchar(255) not null,
//   email varchar(255) unique not null,
//   password varchar(255) not null,
//   createdAt timestamp DEFAULT(now()),

//   primary key (id)
// );

// create table profiles(
//   id int auto_increment not null,
//   avatar varchar(255),
//   banner varchar(255),
//   user_id int,
//   primary key(id),
//   foreign key(user_id) references users(id)
//   on update cascade
//   on delete cascade
// );
