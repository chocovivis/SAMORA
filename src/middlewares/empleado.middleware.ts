import { Request, Response, NextFunction } from "express";

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