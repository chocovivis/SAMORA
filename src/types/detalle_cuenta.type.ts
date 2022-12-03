import { ServicioModel } from "../models/servicio.model";
import ReservacionType from "./reservacion.type";
import ServicioType from "./servicio.type";

export default interface DetalleCuentaType {
    idDetalleCuenta?: number;
    totalFinal?: number;
    estado?: boolean;
    idReservacion?: number;
    reservacion?: ReservacionType;
    servicios?: ServicioModel[];
  }