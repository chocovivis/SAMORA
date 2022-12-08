import { Request, Response } from 'express';
/**
 * Regresa la vista del registro
 * 
 */
export function registroResponse(req: Request, res: Response) {
  const data = { title: "Registro" };
  return res.render("registro");
} 