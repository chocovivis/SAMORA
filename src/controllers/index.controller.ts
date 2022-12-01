import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  const data = { title: "inicio" };
  return res.render("index");
}

export function unauthorizedResponse(req: Request, res: Response) {
  return res.render("comunes/view-error-permisos");
}