import { Request, Response } from "express";

export function habitacionResponse(req: Request, res: Response) {
  const data = { title: "habitaciones" };
  return res.render("habitaciones");
}