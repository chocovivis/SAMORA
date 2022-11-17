import { Request, Response } from 'express';

export function QuienesSomosController(req: Request, res: Response) {
  const data = { title: "Quienes somos" };
  return res.render("Quienes_somos");
} 