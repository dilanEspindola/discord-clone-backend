import { Injectable } from "@nestjs/common";
import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";
import * as schema from "./schemas/schema";

@Injectable()
export class DrizzleService {
  private _db: MySql2Database<typeof schema>;

  constructor() {
    this.startConnection()
      .then(() => console.log("connected"))
      .catch((err) => console.log(err));
  }

  async startConnection() {
    const connection = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "dilan",
      database: "discord_clone",
      port: 3306,
    });

    const db = drizzle(connection, {
      schema: schema,
      mode: "default",
    });
    this._db = db;
  }

  db(): MySql2Database<typeof schema> {
    return this._db;
  }

  async runMigrations() {
    try {
      await migrate(this._db, { migrationsFolder: "drizzle" });
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
  }
}
