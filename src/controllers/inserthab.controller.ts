import { Request, Response } from "express";
import {HabitacionModel} from "../models/habitacion.model";
/**
 * Funcion que permite ver la habitacion (la vista) 
 * 
 */
export function verHabitacion(req: Request, res: Response) {
  return res .render("habitacion/insert-hab"); 
} 
/**
 * Lee la habitación de la bd
 * 
 */
export async function readHabitacion(req: Request, res: Response) {
  const {query:where} = req
  const habitaciones = await HabitacionModel.findAll({
    attributes: ["numHabitacion", "precio", "capacidad", "descripcion", "estado"],
    raw: true,
    where
  });
  res.status(200).json(habitaciones);
}
/**
 * Crea una habitación con los datos de body
 * 
 */

export async function createHabitacion(req: Request, res: Response) {
  try {
    const { body } = req;
    //body["url_imagen"] = file?.path;
    const HabitacionResponse = await HabitacionModel.create(body, { raw: true });
    res.status(201).json(HabitacionResponse);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Actualiza un habitación con los datos de body (formulario)
 * 
 */
export async function updateHabitacion(req: Request, res: Response) {
  const {numHabitacion} = req.params;
  const {body} = req;
  const entity = await HabitacionModel.findByPk(numHabitacion);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}
/**
 * Borra la habitación por id
 * 
 */
export async function deleteHabitacion(req: Request, res: Response) {
  const {idProducto} = req.params;
  const entity = await HabitacionModel.findByPk(idProducto);
  console.log(entity);
  await entity?.destroy();
  res.status(204).json({ok:""});
}

