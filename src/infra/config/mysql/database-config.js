import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)