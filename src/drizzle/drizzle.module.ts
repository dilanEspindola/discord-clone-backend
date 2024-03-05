import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/mysql2";
import * as schemas from "./schemas/";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { mysqlLocalConnection } from "./helpers";

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDE,
      useFactory: async () => {
        try {
          const conn = await mysqlLocalConnection();
          const db = drizzle(conn, { schema: schemas, mode: "default" });

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
