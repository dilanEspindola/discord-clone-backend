import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./schemas/schemas.ts"],
  driver: "mysql2",
  strict: true,
  verbose: true,
  dbCredentials: {
    host: "localhost",
    port: 3306,
    password: "dilan",
    user: "root",
    database: "discord_clone",
  },
  out: "./drizzle-migrate",
});
