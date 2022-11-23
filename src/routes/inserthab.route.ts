import {Router} from "express";
import { getHabitacion, insertResponse,updateHabitacion } from "../controllers/inserthab.controller";

const getHabRouter: Router = Router();


getHabRouter.get("/",getHabitacion); 
getHabRouter.get("/mostrarhabitacion",insertResponse);
getHabRouter.post("/update/:numHabitacion",updateHabitacion);

export default getHabRouter;