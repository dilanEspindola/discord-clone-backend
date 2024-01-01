import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schema from "./schemas/schema";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { mysqlDrizzleConnection } from "./helpers";

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDE,
      useFactory: async () => {
        try {
          // MySQL local connection
          // const connection = await mysql.createConnection({
          //   host: <string>process.env.DB_HOST_LOCAL,
          //   user: <string>process.env.DB_USERNAME_LOCAL,
          //   password: <string>process.env.DB_PASSWORD_LOCAL,
          //   database: <string>process.env.DB_NAME_LOCAL,
          //   port: Number(process.env.DB_PORT_LOCAL),
          // });
          // const connection = await mysqlLocalConnection();
          // const db = drizzleMysql(connection, {
          //   schema: schema,
          //   mode: "default",
          // });

          // Mysql planetScale connection
          const conn = mysqlDrizzleConnection();
          const db = drizzle(conn, { schema: schema });

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
