import {Router} from "express";
import { createHabitacion, deleteHabitacion, readHabitacion, updateHabitacion, verHabitacion } from "../controllers/inserthab.controller";;
import storageMulter from "../middlewares/multer.middleware";

const verHabRouter: Router = Router();


verHabRouter.get("/ver",verHabitacion); 
verHabRouter.get("/",readHabitacion);
verHabRouter.post("/",storageMulter.single("imagen"), createHabitacion);
verHabRouter.post("/update/:numHabitacion",storageMulter.single("imagen"),updateHabitacion);
verHabRouter.delete("/:idProducto",deleteHabitacion);

export default verHabRouter;
