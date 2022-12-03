import {Router} from "express";
import { detalleCuentaReservacionResponse } from "../controllers/detalle_cuenta.controller";


const detalleCuentaRouter: Router = Router();

detalleCuentaRouter.get("/:idReservacion", detalleCuentaReservacionResponse);

export default detalleCuentaRouter;