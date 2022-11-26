import { Request, Response } from "express";

export function addserviceResponse(req: Request, res: Response) {
  const data = { title: "agregar servicio" };
  return res.render("addservice");
}