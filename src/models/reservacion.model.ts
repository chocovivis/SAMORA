import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { HabitacionModel } from "./habitacion.model";
import { ClienteModel } from "./cliente.model";
import ReservacionType from "../types/reservacion.type";

export class ReservacionModel extends Model<ReservacionType> {}

ReservacionModel.init(
  {
    idReservacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    idCliente:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },

    
  },
  {
    sequelize,
    tableName: "reservacion",
  }
);
//HabitacionModel.belongsToMany(ClienteModel, { through: ReservacionModel });
//ClienteModel.belongsToMany(HabitacionModel, { through: ReservacionModel });

ReservacionModel.belongsTo(ClienteModel,{
   foreignKey: "idCliente",
   as: "cliente",
 });
//ClienteModel.hasMany(ReservacionModel);
ReservacionModel.belongsTo(HabitacionModel, {
 foreignKey: "numHabitacion",
 as: "habitacion",
});
//HabitacionModel.hasMany(ReservacionModel);
