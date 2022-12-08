import { Router } from "express";
import { reporteResponse } from "../controllers/reporte.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const reporteRouter: Router = Router();

reporteRouter.get("/",validaRutaEmpleado,reporteResponse);

export default reporteRouter;
