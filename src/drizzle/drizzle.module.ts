import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schemas/schema";
import { DRIZZLE_PROVIDE } from "@/helpers";

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDE,
      useFactory: async () => {
        try {
          const connection = await mysql.createConnection({
            host: <string>process.env.DB_HOST,
            user: <string>process.env.DB_USERNAME,
            password: <string>process.env.DB_PASSWORD,
            database: <string>process.env.DB_NAME,
            port: Number(process.env.DB_PORT),
          });

          const db = drizzle(connection, {
            schema: schema,
            mode: "default",
          });

          return db;
        } catch (error) {
          console.log(error);
        }
      },
    },
  ],
  exports: [DRIZZLE_PROVIDE],
})
export class DrizzleModule {}
