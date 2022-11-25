
import {Router} from "express";
import { updateHabitacion, verFormEdit, verFormulario } from "../controllers/verForm.controller";

const verFormRouter: Router = Router();


verFormRouter.post("/update/:numHabitacion",updateHabitacion); 
verFormRouter.get("/ver/formulario",verFormulario);
verFormRouter.get("/verform-edit/:numHabitacion",verFormEdit);
export default verFormRouter;