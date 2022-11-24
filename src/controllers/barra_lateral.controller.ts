import { Request, Response } from "express";

export function barra_lateralResponse(req: Request, res: Response) {
  const data = { title: "barra_lateral" };
  return res.render("../views/comunes/componentes/barra_lateral.ejs");
}