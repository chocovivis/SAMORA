import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import HabitacionType from "../types/habitacion.type";


export class HabitacionModel extends Model<HabitacionType> {}

HabitacionModel.init(
  {
    numHabitacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    url_imagen:{
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "habitacion",
  }
);





