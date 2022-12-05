import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  console.log("***************************")
  console.log(req.session.user)
  console.log("***************************")
  let isAdmin = req.session.user!=undefined && req.session.user.rol==='1111';
  return res.render("index",{admin:isAdmin});
}

