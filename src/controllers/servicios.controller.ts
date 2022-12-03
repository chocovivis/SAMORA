import { Request, Response } from 'express';

export function serviciosResponse(req: Request, res: Response) {
  const data = { title: "Servicios" };
  return res.render("servicios");
} 