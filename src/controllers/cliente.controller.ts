import { Request, Response } from "express";
import { ClienteModel } from "../models/cliente.model";

/**
 * Funcion que lee el cliente de la base de datos
 * 
 */
export async function readCliente(req: Request, res: Response) {
  const {query:where} = req
  const empleados = await ClienteModel.findAll({
    raw: true,
    where
  });
  res.status(200).json(empleados);
}
/**
 * Funcion que crea al cliente en base a los datos del body
 * 
 */
export async function createCliente(req: Request, res: Response) {
  try {
    const { body } = req;
    //body["url_imagen"] = file?.path;
    const ClienteResponse = await ClienteModel.create(body, { raw: true });
    res.status(201).json(ClienteResponse);
  } catch (error) {
    console.log(error);
  }
}