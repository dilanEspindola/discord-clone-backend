import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

process.env.NODE_ENV.includes("development")
  ? dotenv.config({ path: ".env.development" })
  : dotenv.config({ path: ".env.production" });

export default defineConfig({
  schema: [`src/drizzle/schemas/*.ts`],
  driver: "mysql2",
  introspect: { casing: "camel" },
  strict: true,
  verbose: true,
  dbCredentials: {
    // uri: process.env.DB_URI,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  },
  out: "drizzle-migration",
});
