import {Router} from "express";
import { crearReservacionResponse, reservacionesResponse } from "../controllers/reservaciones.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const reservacionesRouter: Router = Router();

reservacionesRouter.get("/",validaRutaEmpleado, reservacionesResponse);
reservacionesRouter.post("/crear", crearReservacionResponse);

export default reservacionesRouter;

