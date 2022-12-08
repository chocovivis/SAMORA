import { Request, Response } from "express";
/**
 * Regresa la vista del menu
 * 
 */
export function menuResponse(req: Request, res: Response) {
  const data = { title: "menú" };
  return res.render("menu");
}