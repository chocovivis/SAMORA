import { Request, Response } from "express";
import { EmpleadoModel } from "../models/empleado.model";


export async function readEmpleado(req: Request, res: Response) {
  const {query:where} = req
  const empleados = await EmpleadoModel.findAll({
    raw: true,
    where
  });
  res.status(200).json(empleados);
}