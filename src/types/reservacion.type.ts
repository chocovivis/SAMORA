import HabitacionType from "./habitacion.type";

export default interface ReservacionType {
    idReservacion?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    estado?: string;
    idCliente?: number;
    numHabitacion?:number;
    createdAt?: string;
    habitacion?: HabitacionType;
  }
