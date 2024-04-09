import dotenv from "dotenv";

process.env.NODE_ENV.includes("development")
  ? dotenv.config({ path: ".env.development" })
  : dotenv.config({ path: ".env.production" });

export const JWT_SECRET = process.env.JWT_SECRET;

export const DRIZZLE_PROVIDE = "DRIZZLE_CONNECTION";
