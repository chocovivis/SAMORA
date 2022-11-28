import { Request, Response } from "express";
import { obtenerReservaciones } from "./crud/crudReservacionesController";

export async function reservacionesResponse(req: Request, res: Response) {
  const filter = "PENDIENTE";
  const reservaciones = await obtenerReservaciones(filter);
  console.log("All reservaciones:", JSON.stringify(reservaciones));
  // return res.send(reservaciones);
  return res.render("reservaciones", { reservaciones, formatoFecha: formatoFecha });
}

const formatoFecha = (fecha: any) => {
  console.log(fecha);
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    dayPeriod: "long",
    month: "short",
  }).format(new Date(fecha));
};