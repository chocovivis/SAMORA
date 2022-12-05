import { Request, Response } from "express";
import { isAdmin } from "../libraries/review.library";

export function indexResponse(req: Request, res: Response) {
  return res.render("index",{isAdmin:isAdmin(req)});
}

