import {Router} from "express";
import { createHabitacion, deleteHabitacion, readHabitacion, updateHabitacion, verHabitacion } from "../controllers/inserthab.controller";import { validaRutaEmpleado } from "../middlewares/empleado.middleware";
;
import storageMulter from "../middlewares/multer.middleware";

const verHabRouter: Router = Router();


verHabRouter.get("/ver",validaRutaEmpleado,verHabitacion); 
verHabRouter.get("/",readHabitacion);
verHabRouter.post("/",storageMulter.single("imagen"), createHabitacion);
verHabRouter.post("/update/:numHabitacion",storageMulter.single("imagen"),updateHabitacion);
verHabRouter.delete("/:idProducto",deleteHabitacion);

export default verHabRouter;
