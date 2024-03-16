import { connect, Connection } from "@planetscale/database";
import mysql from "mysql2/promise";

export const mysqlDrizzleConnection = (): Connection => {
  const connection = connect({
    host: <string>process.env.DB_HOST,
    username: <string>process.env.DB_USERNAME,
    password: <string>process.env.DB_PASSWORD,
  });

  return connection;
};

export const mysqlLocalConnection = async (): Promise<mysql.Connection> => {
  const connection = await mysql.createConnection({
    host: <string>process.env.DB_HOST,
    user: <string>process.env.DB_USERNAME,
    password: <string>process.env.DB_PASSWORD,
    database: <string>process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });

  return connection;
};
