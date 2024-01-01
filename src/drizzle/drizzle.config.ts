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
    uri: process.env.DB_URI,
    //   host: process.env.DB_HOST_LOCAL,
    //   user: process.env.DB_USERNAME_LOCAL,
    //   password: process.env.DB_PASSWORD_LOCAL,
    //   database: process.env.DB_NAME_LOCAL,
    //   port: Number(process.env.DB_PORT_LOCAL),
  },
  out: "drizzle",
});
