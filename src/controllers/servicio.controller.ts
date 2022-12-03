import { Request, Response } from "express";
import { ServicioModel } from "../models/servicio.model";

export async function servicioResponse(req: Request, res: Response) {
  const servicios = await ServicioModel.findAll();
  console.log("All servicios:", JSON.stringify(servicios));
  //return res.render("servicios", { servicios });
  res.status(200).json(servicios);
}
