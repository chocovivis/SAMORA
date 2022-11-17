import {Router} from "express";
import { createHabitacion,getHabitacion,getHabitacionById } from "../controllers/inserthab.controller";

const createHabRouter: Router = Router();

createHabRouter.get("/", createHabitacion);
createHabRouter.get("/",getHabitacion);
createHabRouter.get("/:numHabitacion",getHabitacionById);

export default createHabRouter;
