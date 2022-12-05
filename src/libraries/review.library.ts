import { Request, Response } from "express";

export function isAdmin(req: Request){
  return req?.session.user!=undefined && req?.session.user.rol==='1111';
}

export function isAuth(req: Request){
  return req?.session.user!==undefined;
}