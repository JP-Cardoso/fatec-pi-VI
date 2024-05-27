import { DataTypes } from "sequelize";
import { sequelize } from "../mysql/database-config.js";
import { UserModel } from "../user/user-model.js";

export const AccountModel = sequelize.define(
  'conta', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  idDoCliente: {
    type: DataTypes.CHAR(36),
    allownull: false,
    references: {
      model: 'cliente',
      key: 'id'
    }
  },
  saldo: {
    type: DataTypes.DECIMAL(10, 2),
    allownull: false,
    defaultValue: 0.00
  },
  agencia: {
    type: DataTypes.STRING(10),
    allownull: false,
  },
}, {
  tableName: 'conta'
});

AccountModel.belongsTo(UserModel, {foreignKey: 'idDoCliente', as: 'cliente'});
UserModel.hasOne(AccountModel, {foreignKey: 'idDoCliente', as: 'conta'});