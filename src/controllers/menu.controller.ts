import { Request, Response } from "express";

export function menuResponse(req: Request, res: Response) {
  const data = { title: "menú" };
  return res.render("menu");
}