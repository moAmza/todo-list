import "dotenv/config";
import { Options } from "sequelize";

const config: Options = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "todolist",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = config;
