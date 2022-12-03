import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import SesionType from "../types/sesion.type"; 


export class SesionModel extends Model<SesionType> {}

SesionModel.init(
  {
    idSesion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_cierre:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: "sesion",
  }
);
