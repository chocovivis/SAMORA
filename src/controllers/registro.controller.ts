import { Request, Response } from 'express';

export function registroResponse(req: Request, res: Response) {
  const data = { title: "Registro" };
  return res.render("registro");
}

//Carayo