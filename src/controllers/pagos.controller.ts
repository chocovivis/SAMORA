import { Request, Response } from "express";
/**
 * Regresa la vista de los pagos
 * 
 */
export function pagosResponse(req: Request, res: Response) {
  const data = { title: "Pagos" };
  let { id } = req.params;
  return res.render("pagos", { idHabitacion: id });
}
