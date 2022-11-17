import { Request, Response } from "express";
import {HabitacionModel} from "../models/habitacion.model";

export async function getHabitacion(req: Request, res: Response) {
  const records = await HabitacionModel.findAll({ raw: true, attributes: ["numHabitacion" ,"precio","capacidad","descripcion","estado"] });
  res.status(200).json(records);
}

export async function getHabitacionById(req: Request, res: Response) {
    const {numHabitacion} = req.params;
    const records = await HabitacionModel.findAll({ raw: true ,where:{numHabitacion}});
    res.status(200).json(records);
}
export async function createHabitacion(req: Request, res: Response) {
    const {numHabitacion ,precio,capacidad,descripcion,estado} = req.body;
    await HabitacionModel.create({numHabitacion ,precio,capacidad,descripcion,estado});
    const records = await HabitacionModel.findAll({raw:true});
    const data = {httpCode:201,
      message:"Registrado correctamente",
      records:records};
    res.status(201).render("insert-hab",data);
}
