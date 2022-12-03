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
export async function createEmpleado(req: Request, res: Response) {
  try {
    const { body } = req;
    //body["url_imagen"] = file?.path;
    const EmpleadoResponse = await EmpleadoModel.create(body, { raw: true });
    res.status(201).json(EmpleadoResponse);
  } catch (error) {
    console.log(error);
  }
}