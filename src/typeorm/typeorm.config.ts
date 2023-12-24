import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default registerAs("typeormdb", (): TypeOrmModuleOptions => {
  return {
    type: "mysql",
    host: <string>process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: <string>process.env.DB_USERNAME,
    password: <string>process.env.DB_PASSWORD,
    database: <string>process.env.DB_NAME,
    entities: [],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
      synchronize: false,
    },
  };
});
