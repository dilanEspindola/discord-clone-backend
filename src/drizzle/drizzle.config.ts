import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

export default defineConfig({
  schema: ["src/drizzle/schemas/schema.ts"],
  driver: "mysql2",
  introspect: { casing: "camel" },
  strict: true,
  verbose: true,
  dbCredentials: {
    uri: `mysql://x08xi45yrnswedma3fay:pscale_pw_hjSFuIu5QcL1KCGD0B0vw4hWDfKMx3BZyPK0tVINWgh@aws.connect.psdb.cloud/discord_clone?ssl={"rejectUnauthorized":true}`,
    //   host: process.env.DB_HOST_LOCAL,
    //   user: process.env.DB_USERNAME_LOCAL,
    //   password: process.env.DB_PASSWORD_LOCAL,
    //   database: process.env.DB_NAME_LOCAL,
    //   port: Number(process.env.DB_PORT_LOCAL),
  },
  out: "drizzle",
});
