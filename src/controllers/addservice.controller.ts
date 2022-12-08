import { Request, Response } from "express";
/**
 * Regresa la vista para agregar el servicio 
 * 
 */
export function addserviceResponse(req: Request, res: Response) {
  const data = { title: "agregar servicio" };
  return res.render("addservice");
}