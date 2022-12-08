import { Request, Response, NextFunction } from "express";
/**
 * Funcion que valida los roles de un usario para el empleado 
 * "1111" es el rol del cliente, impide que alguien que no es cliente 
 */
export function validaRutaEmpleado(req:Request, res:Response, next: NextFunction){
    if (!req.session.user) {
        return res.redirect("/loggin/signin");
    }
    if(req.session.user.rol!=="1111"){
        return res.redirect("/admon/unauthorized");
    }
    next();
}
/**
 * Rol del empleado = 1111
*/