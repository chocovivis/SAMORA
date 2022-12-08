import { Request, Response, NextFunction } from "express";
import { generatePassword, hashPassword } from "../libraries/bycript.library";
/**
 * Funcion que genera las contraseñas para el usuario
 * 
 * Funcion que crea el usuario, tomando los datos del body
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
 *
 * Funcion que cifra la contraseña del usuario para guardarla en la base de datos
 *
 */

export async function cifrarContraseniaUsuarioMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  body["contrasenia"] = hashPassword(body["contrasenia"]);
  next();
}
