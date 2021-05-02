require("dotenv").config();
const config = require("./index");

module.exports = {
  development: {
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
