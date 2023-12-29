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
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  out: "drizzle",
});
