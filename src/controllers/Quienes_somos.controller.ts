import { Request, Response } from 'express';
import { isAdmin } from '../libraries/review.library';
/**
 * Regresa la vista de quienes somos
 * 
 */
export function quienes_somosResponse(req: Request, res: Response) {
  const data = { title: "Quienes somos" };
  return res.render("Quienes_somos",{isAdmin:isAdmin(req)});
} 