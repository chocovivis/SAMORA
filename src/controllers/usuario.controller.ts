import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sequelize } from "../database/database.config";
import { ClienteModel } from "../models/cliente.model";
import { UsuarioModel } from "../models/usuario.model";
import * as authService from "../services/auth.service";

//REGISTROS DE CLIENTES, SE HARÁ OTRO PARA ADMINISTRADOR
export async function createUsuario(req: Request, res: Response) {
  const t = await sequelize.transaction();
  try {
    const { body } = req;
    let { correo, contrasenia, nombre, apellido, direccion, telefono } = body;
    const contraseniaUnhash = body["contraseniaUnhash"];
    delete body.contraseniaUnhash;
    const usuarioResponse = await UsuarioModel.create({correo,contrasenia},{ transaction: t });
    let idUsuario = usuarioResponse.getDataValue("idUsuario");
    await ClienteModel.create({
      idUsuario,
      nombre,
      apellido,
      direccion,
      telefono,
    },{ transaction: t });
    
    const mail = usuarioResponse.getDataValue("correo");
    // await authService.sendUserCredentials({
    //   mail,
    //   data: { correo: mail, contrasenia: contraseniaUnhash },
    // });
    console.log("********CREDENCIALES**********");
    console.log("correo:", mail);
    console.log("password:", contraseniaUnhash);
    console.log("********            **********");
    await t.commit();
    return res.redirect("/loggin/signin");
    // res.status(StatusCodes.CREATED).json(usuarioResponse);
  } catch (e) {
    await t.rollback();
    console.log("********Usuario Error**********");
    const error = e as Error;
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: error, nameError: error.name, detail: error.message });
  }
}
