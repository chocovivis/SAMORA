import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { HabitacionModel } from "./habitacion.model";
import ReservacionType from "../types/reservacion.type";

export class ReservacionModel extends Model<ReservacionType> {}

ReservacionModel.init(
  {
    idReservacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    fechainicio: {
        type: DataTypes.DATE,
        allowNull:false
    },
    fechafin:{
        type: DataTypes.DATE,
        allowNull:false
    }
  },
  {
    sequelize,
    tableName: "reservacion",
  }
);
ReservacionModel.hasMany(HabitacionModel, {
    foreignKey: "idReservacion",
    sourceKey: "idReservacion",
  });
