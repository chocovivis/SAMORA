import { Request, Response } from 'express';
import { isAdmin } from '../libraries/review.library';

export function quienes_somosResponse(req: Request, res: Response) {
  const data = { title: "Quienes somos" };
  return res.render("quienes_somos",{isAdmin:isAdmin(req)});
} 