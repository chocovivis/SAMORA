import { Request, Response, NextFunction } from "express";

export function validaRutaCliente(req:Request, res:Response, next: NextFunction){
    if (!req.session.user) {
        return res.redirect("/loggin/signin");
    }
    if(req.session.user.rol!=="2222"){
        return res.redirect("/admon/unauthorized");
    }
    next();
}