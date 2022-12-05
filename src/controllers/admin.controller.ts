import { Request, Response } from "express";
export function adminResponse(req: Request, res: Response) {
  const data = { title: "admin" };
  return res.render("admin-view");
}
export function unauthorizedResponse(req: Request, res: Response) {
  return res.render("view-error");
}