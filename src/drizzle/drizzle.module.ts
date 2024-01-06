import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schemas from "./schemas/";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { mysqlDrizzleConnection } from "./helpers";

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDE,
      useFactory: async () => {
        try {
          // Mysql planetScale connection
          const conn = mysqlDrizzleConnection();
          const db = drizzle(conn, { schema: schemas });

          console.log(db);

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
