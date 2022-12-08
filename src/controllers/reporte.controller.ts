import { Request, Response } from "express";
import { ReservacionModel } from "../models/reservacion.model";
import { isAdmin } from "../libraries/review.library";
import { HabitacionModel } from "../models/habitacion.model";

export async function reporteResponse(req: Request, res: Response) {
  const reservaciones = await getReservacion();
  console.log(reservaciones);
  console.log("Carayoooo");
  return res.render("reporte", { reservaciones, isAdmin: isAdmin(req) });
}

async function getReservacion() {
  return await ReservacionModel.findAll()
    .then((reservaciones) => {
      return reservaciones;
    })
    .catch((err) => {
      return {
        message:
          err.message || "Ha ocurrido un error mientras se leían las reservaciones",
      };
    });
}


