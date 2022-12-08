import { Request, Response } from "express";
import {
  generatePassword,
  isValidPassword,
} from "../libraries/bycript.library";
import { UsuarioModel } from "../models/usuario.model";
/**
 * Carga la vista del login 
 * 
 */

export function logginView(req: Request, res: Response) {
  const { error } = req.query;
  res.render("login/login-view", { error });
}
/**
 * Logea al usuario
 * 
 */
export async function logginUsuario(req: Request, res: Response) {
  try {
    const { body } = req;
    let { correo, contrasenia } = body;
    const usuarioResponse = await UsuarioModel.findOne({
      attributes: ["idUsuario", "correo", "estatus", "rol", "contrasenia"],
      where: { correo },
      include: { all: true },
    });

    if (usuarioResponse !== null) {
      const contraseniaUsuario = usuarioResponse?.getDataValue("contrasenia");
      if (isValidPassword(contrasenia, contraseniaUsuario)) {
        const user = usuarioResponse?.toJSON();
        delete user?.contrasenia;
        req.session.user = user;
        req.session.save();
        let rol = user.rol;
        if(rol==="1111"){
          return res.redirect("/admon");
        }
        return res.redirect("/");
      }
    }

    return res.redirect("/loggin/signin?error=1");
  } catch (error) {
    res.send("error")
  }
}
/**
 * Cierra la sesión del usuario
 * 
 */
export async function loggout(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      console.log("error al cerrar sesion");
    }
    res.redirect("/");
  });
}
