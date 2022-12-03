import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import UsuarioType from "../types/usuario.type";
import { ClienteModel } from "./cliente.model";
import { EmpleadoModel } from "./empleado.model";
import { SesionModel } from "./sesion.model";

export class UsuarioModel extends Model<UsuarioType> {}

UsuarioModel.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: { name: "uCorreoUsuario", msg: "Correo Anteriormente Registrado" },
      validate: {
        isEmail: {
          msg: "no es un correo",
        },
      },
    },
    contrasenia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estatus: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "A",
    },
    rol: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "2222",
    },
    token_restauracion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "usuario",
  }
);
UsuarioModel.hasMany(EmpleadoModel,{
  foreignKey: "idUsuario",
  sourceKey: "idUsuario",
});
UsuarioModel.hasMany(ClienteModel,{
  foreignKey: "idUsuario",
  sourceKey: "idUsuario",
});
UsuarioModel.hasMany(SesionModel, {
  foreignKey: "idUsuario",
  sourceKey: "idUsuario",
});

