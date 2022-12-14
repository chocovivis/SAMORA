import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
// import { ReservacionModel } from "./reservacion.model";
import ClienteType from "../types/cliente.type";


// import { HabitacionModel } from "./habitacion.model";

export class ClienteModel extends Model<ClienteType> {}

ClienteModel.init(
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    idUsuario:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cliente",
  }
);

// ReservacionModel.belongsTo(ClienteModel)
// ClienteModel.hasMany(ReservacionModel);
// ClienteModel.belongsToMany(HabitacionModel, { through: ReservacionModel });
