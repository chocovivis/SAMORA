import { Request, Response } from "express";
import { ReservacionModel } from "../models/reservacion.model";

export async function pagosResponse(req: Request, res: Response) {
  const data = { title: "Pagos" };
  let { id } = req.params;
  let reservaciones = await ReservacionModel.findAll({
    where: {
      numHabitacion: id,
      estado: "PENDIENTE",
    },
  });

  return res.render("pagos", { idHabitacion: id, reservaciones });
}
