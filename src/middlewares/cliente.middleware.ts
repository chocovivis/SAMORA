import { Request, Response, NextFunction } from "express";

export function validaRutasEmpleado (req: Request, res: Response, next:NextFunction){
    if(!req.session.user){
        return res.redirect("/login/signin");
    }
    if(req.session.user.rol !== "2222"){
        return res.redirect("/unauthorized");
    }
    next();
}