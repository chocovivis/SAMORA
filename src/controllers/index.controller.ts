import { Request, Response } from "express";
import { isAdmin, isAuth } from "../libraries/review.library";
/**
 * Regresa la vista del index
 * 
 */
export function indexResponse(req: Request, res: Response) {
  return res.render("index",{isAdmin:isAdmin(req), isAuth:isAuth(req)});
}

