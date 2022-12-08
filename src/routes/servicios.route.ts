import { Router } from "express";
import { servicioResponse } from "../controllers/servicio.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const servicioRouter: Router = Router();

servicioRouter.get("/",validaRutaEmpleado,servicioResponse);

export default servicioRouter;


