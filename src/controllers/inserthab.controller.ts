import { Request, Response } from "express";
import {HabitacionModel} from "../models/habitacion.model";


export async function getHabitacion(req: Request, res: Response) {
  const {query:where} = req
  const habitaciones = await HabitacionModel.findAll({
    attributes: ["numHabitacion", "precio", "capacidad", "descripcion", "estado"],
    raw: true,
    where
  });
  res.status(200).json(habitaciones);
}

export function inserHabResponse(req: Request, res: Response) {
  const data = { title: "Edita las habitaciones!" };
  return res.render("insert-hab");
}



