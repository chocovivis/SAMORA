import { Request, Response, NextFunction } from "express";
/**
 * Funcion que valida los roles de un usario para el cliente 
 * "2222" es el rol del cliente, impide que alguien que no es cliente 
 */
export function validaRutaCliente(req:Request, res:Response, next: NextFunction){
    if (!req.session.user) {
        return res.redirect("/loggin/signin");
    }
    if(req.session.user.rol!=="2222"){
        return res.redirect("/admon/unauthorized");
    }
    next();
}