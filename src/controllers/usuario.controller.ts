import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sequelize } from "../database/database.config";
import { ClienteModel } from "../models/cliente.model";

import { UsuarioModel } from "../models/usuario.model";
import * as authService from "../services/auth.service";
import alert from 'alert';


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
    let rol = usuarioResponse.getDataValue("rol");
    if(rol!="1111"){
      await ClienteModel.create({
        idUsuario,
        nombre,
        apellido,
        direccion,
        telefono,
      },{ transaction: t });
    }
    
    
    const mail = usuarioResponse.getDataValue("correo");
    await authService.sendUserCredentials({
      mail,
      data: { correo: mail, contrasenia: contraseniaUnhash },
     });
    console.log("********CREDENCIALES**********");
    console.log("correo:", mail);
    console.log("password:", contraseniaUnhash);
    console.log("********            **********");
    await t.commit();
    return res.redirect("/loggin/signin");
     res.status(StatusCodes.CREATED).json(usuarioResponse);
  } catch (e) {
    await t.rollback();
    console.log("********Usuario Error**********");
    const error = e as Error;
    alert("El correo electrónico ya está en uso");
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .redirect("/registro");
      //.json({ error: error, nameError: error.name, detail: error.message });
  }
}
