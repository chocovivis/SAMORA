import { Request, Response } from "express";
import { isAdmin } from "../libraries/review.library";
import { ReservacionModel } from "../models/reservacion.model";
import ReservacionType from "../types/reservacion.type";

export async function reservacionesResponse(req: Request, res: Response) {
  const reservaciones = await ReservacionModel.findAll({ 
    include: { all: true },
    order: [["idReservacion", "ASC"]],
  });
 // console.table( JSON.stringify(reservaciones));
  //return res.send(reservaciones);
  return res.render("reservaciones", {isAdmin: isAdmin(req), reservaciones, formatoFecha: formatoFecha });
}

export const actualizarReservacion = async (
  payload: Partial<ReservacionType>
): Promise<ReservacionModel> => {
  const reservacion = await ReservacionModel.findByPk(payload.idReservacion);
  if (!reservacion) {
    throw new Error("not found");
  }
  const updatedReservacion = await (reservacion as ReservacionModel).update(
    payload
  );
  return updatedReservacion;
};

export const obtenerReservacionPorId = async (
  idReservacion: number
): Promise<ReservacionModel> => {
  const reservacion = await ReservacionModel.findByPk(idReservacion);
  if (!reservacion) {
    throw new Error("not found");
  }
  return reservacion;
};

export const eliminarReservacion = async (
  idReservacion: number
): Promise<boolean> => {
  const reservacionEliminada = await ReservacionModel.destroy({
    where: { idReservacion },
  });
  return !!reservacionEliminada;
};


const formatoFecha = (fecha: string) => {
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    dayPeriod: "long",
    month: "short",
  }).format(new Date(fecha));
};

