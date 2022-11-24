import {Router} from "express";
import { getHabitacion, insertResponse } from "../controllers/inserthab.controller";

const getHabRouter: Router = Router();


getHabRouter.get("/",getHabitacion); 
getHabRouter.get("/mostrarhabitacion",insertResponse);

export default getHabRouter;