import { Request, Response } from "express";
import { isAdmin } from "../libraries/review.library";

export function reporteResponse(req: Request, res: Response) {
  return res.render("reporte",{isAdmin: isAdmin(req)});
}