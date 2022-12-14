import { Request, Response } from "express";
import { isAdmin } from "../libraries/review.library";
import { HabitacionModel } from "../models/habitacion.model";
/**
 * Funcion que redirige a la vista de habitaciones y lee de la base de datos con ayuda
 * de la función getHabitaciones que va y lee los registros 
 * 
 */
export async function habitacionResponse(req: Request, res: Response) {
  const habitaciones = await getHabitaciones();
  console.log("All habitaciones:", JSON.stringify(habitaciones));
  return res.render("habitaciones", { habitaciones, isAdmin:isAdmin(req)});
}

async function getHabitaciones() {
  return await HabitacionModel.findAll()
    .then((habitaciones) => {
      return habitaciones;
    })
    .catch((err) => {
      return {
        message:
          err.message || "Ah ocurrido un error mientras se leían Habitationes",
      };
    });
}
