import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { HabitacionModel } from "./habitacion.model";
import { UsuarioModel } from "./usuario.model";
import EmpleadoType from "../types/empleado.type";

export class EmpleadoModel extends Model<EmpleadoType> {}

EmpleadoModel.init(
  {
    idEmpleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    idUsuario:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    puesto: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "empleado",
  }
);
EmpleadoModel.hasMany(HabitacionModel, {
    foreignKey: "idEmpleado",
    sourceKey: "idEmpleado",
  });
