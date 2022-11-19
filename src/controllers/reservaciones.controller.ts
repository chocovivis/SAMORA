import { Request, Response } from "express";

export function reservacionesResponse(req: Request, res: Response) {
  const data = { title: "cuentas reservaciones" };
  return res.render("reservaciones");
}