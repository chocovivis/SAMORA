import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/config.js")[env];
export const sequelize = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect,
      dialectOptions: {
       ssl: config.ssl
      },
      logging: false,
    });