import { Request, Response } from "express";

import {HabitacionModel} from "../models/habitacion.model";

  
  export async function verFormulario(req:Request,res:Response){
    const records = await HabitacionModel.findAll({raw:true});
    const data = {httpCode:0,message:"",records};
    res.render("hab-view",data);
  }
  export async function verFormEdit(req:Request,res:Response) {
    const {numHabitacion} = req.params;
    const entity = await HabitacionModel.findByPk(numHabitacion,{raw:true});
    const data = entity || {};
    res.render("comunes/componentes/form-edit-component",data);
  }
  
  export async function updateHabitacion(req: Request, res: Response) {
    const {idStatus} = req.params;
    const {precio,descripcion,estado} = req.body;
    const entity = await HabitacionModel.findByPk(idStatus);
    entity?.update({precio,descripcion,estado});
    res.redirect("/edita/ver/formulario");
  }
  
  
  
  
  