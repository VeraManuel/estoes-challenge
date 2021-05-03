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
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: "mysql",
  },
  production: {
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: "mysql",
  },
};
