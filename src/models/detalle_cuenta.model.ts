import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import DetalleCuentaType from "../types/detalle_cuenta.type";
import { ReservacionModel } from "./reservacion.model";
import { ServicioModel } from "./servicio.model";

export class DetalleCuentaModel extends Model<DetalleCuentaType> {}

DetalleCuentaModel.init(
  {
    idDetalleCuenta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    totalFinal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    idReservacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "detalle_cuenta",
  }
);

DetalleCuentaModel.belongsTo(ReservacionModel, {
  foreignKey: { name: "idReservacion" },
  as: "Reservacion",
});
// ReservacionModel.hasOne(DetalleCuentaModel);
DetalleCuentaModel.belongsToMany(ServicioModel, {
  through: "detalle_cuenta_servicio",
  as: "servicios",
  foreignKey: "idServicio",
});

ServicioModel.belongsToMany(DetalleCuentaModel, {
  through: "detalle_cuenta_servicio",
  as: "detalle_cuenta",
  foreignKey: "idDetalleCuenta",
});