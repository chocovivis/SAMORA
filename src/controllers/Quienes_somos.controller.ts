import { Request, Response } from 'express';

export function quienes_somosResponse(req: Request, res: Response) {
  const data = { title: "Quienes somos" };
  return res.render("quienes_somos");
} 