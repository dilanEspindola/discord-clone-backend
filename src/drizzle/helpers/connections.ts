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
    host: <string>process.env.DB_HOST_LOCAL,
    user: <string>process.env.DB_USERNAME_LOCAL,
    password: <string>process.env.DB_PASSWORD_LOCAL,
    database: <string>process.env.DB_NAME_LOCAL,
    port: Number(process.env.DB_PORT_LOCAL),
  });

  return connection;
};
