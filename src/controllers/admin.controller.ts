import { Request, Response } from "express";
/**
 * Regresa la vista del andmin  
 * 
 */
export function adminResponse(req: Request, res: Response) {
  const data = { title: "admin" };
  return res.render("admin-view");
}
/**
 * Regresa la vista de error cuando no se tiene acceso a una ruta 
 * 
 */
export function unauthorizedResponse(req: Request, res: Response) {
  return res.render("view-error");
}