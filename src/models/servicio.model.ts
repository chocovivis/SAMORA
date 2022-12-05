import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ServicioType from "../types/servicio.type";

export class ServicioModel extends Model<ServicioType> {}

ServicioModel.init(
  {
    idServicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
  },
  {
    sequelize,
    tableName: "servicio",
  }
);
