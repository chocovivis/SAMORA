import { Request, Response } from 'express';

export function pagosResponse(req: Request, res: Response) {
  const data = { title: "Pagos" };
  return res.render("pagos");
} 