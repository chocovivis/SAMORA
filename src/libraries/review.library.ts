import { Request } from "express";
const ADMIN = "1111";

export function isAdmin(req: Request) {
  return isAuth(req) && req?.session?.user?.rol === ADMIN;
}

export function isAuth(req: Request) {
  return req?.session.user !== undefined;
}

export function getUser(req: Request) {
  if (isAuth(req)) {
    return req.session.user;
  }
}
