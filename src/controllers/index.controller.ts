import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  const data = { title: "inicio" };
  return res.render("index");
}

