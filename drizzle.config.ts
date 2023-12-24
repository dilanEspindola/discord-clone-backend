import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["src/drizzle/schemas/schema.ts"],
  driver: "mysql2",
  introspect: { casing: "camel" },
  strict: true,
  verbose: true,
  dbCredentials: {
    host: "localhost",
    port: 3306,
    password: "dilan",
    user: "root",
    database: "discord_clone",
  },
  out: "drizzle",
});
