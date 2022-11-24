import {Router} from "express";
import {getHabitacion, inserHabResponse} from "../controllers/inserthab.controller";

const getHabRouter: Router = Router();


getHabRouter.get("/",getHabitacion); 
getHabRouter.get("/mostrarhabitacion",inserHabResponse);
export default getHabRouter;