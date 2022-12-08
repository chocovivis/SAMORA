import {Router} from "express";
import { cancelserviceResponse } from "../controllers/cancelservice.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const cancelserviceRouter: Router = Router();

cancelserviceRouter.get("/",validaRutaEmpleado,cancelserviceResponse);

export default cancelserviceRouter;