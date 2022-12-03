import { Request, Response, NextFunction } from "express";

export function validaRutasEmpleado (req: Request, res: Response, next:NextFunction){
    if(!req.session.user){
        return res.redirect("/login/signin");
    }
    if(req.session.user.rol !== "1111"){
        return res.redirect("/admon/unauthorized");
    }
    next();
}