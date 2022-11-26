import { Request, Response } from "express";

export function cancelserviceResponse(req: Request, res: Response) {
  const data = { title: "cancelar servicio" };
  return res.render("cancelservice");
}