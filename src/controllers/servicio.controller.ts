import { Request, Response } from "express";
import { obtenerServicios } from "./crud/crudServiciosController";

export async function servicioResponse(req: Request, res: Response) {
  const servicios = await obtenerServicios('');
  console.log("All servicios:", JSON.stringify(servicios));
  //return res.render("servicios", { servicios });
  res.status(200).json(servicios);
}
