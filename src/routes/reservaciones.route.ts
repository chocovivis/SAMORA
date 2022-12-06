import {Router} from "express";
import { crearReservacionResponse, reservacionesResponse } from "../controllers/reservaciones.controller";


const reservacionesRouter: Router = Router();

reservacionesRouter.get("/", reservacionesResponse);
reservacionesRouter.post("/crear", crearReservacionResponse);

export default reservacionesRouter;

