import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import DetalleCuentaServicioType from "../types/detalle_cuenta_servicio.type";
import { ServicioModel } from "./servicio.model";

export class DetalleCuentaServicioModel extends Model<DetalleCuentaServicioType> {}

DetalleCuentaServicioModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    idServicio: {
      type: DataTypes.INTEGER,
    },
    idDetalleCuenta: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "detalle_cuenta_servicio",
  }
);

DetalleCuentaServicioModel.belongsTo(ServicioModel, {
  foreignKey: { name: "idServicio" },
  as: "servicio",
});