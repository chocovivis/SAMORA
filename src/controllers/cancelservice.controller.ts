import { Request, Response } from "express";
/**
 * Vista para cancelar los servicios
 * 
 */
export function cancelserviceResponse(req: Request, res: Response) {
  const data = { title: "cancelar servicio" };
  return res.render("cancelservice");
}