import { Request, Response } from "express";
import { ClienteModel } from "../models/cliente.model";


export async function readCliente(req: Request, res: Response) {
  const {query:where} = req
  const empleados = await ClienteModel.findAll({
    raw: true,
    where
  });
  res.status(200).json(empleados);
}