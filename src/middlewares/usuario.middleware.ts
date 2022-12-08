import { Request, Response, NextFunction } from "express";
import { generatePassword, hashPassword } from "../libraries/bycript.library";
/**
 * Funcion que genera las contraseñas para el usuario
 * 
 */
export async function createContraseniaUsuarioMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const contraseniaUnhash = generatePassword();
  body["contrasenia"] = contraseniaUnhash;
  body["contraseniaUnhash"] = contraseniaUnhash;
  next();
}
/**
 * Funcion que encrypta las contraseñas de usuario 
 * 
 */
export async function cifrarContraseniaUsuarioMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  body["contrasenia"] = hashPassword(body["contrasenia"]);
  next();
}
