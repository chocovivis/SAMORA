import {Router} from "express";
import { detalleCuentaReservacionResponse, quitarServicioResponse } from "../controllers/detalle_cuenta.controller";


const detalleCuentaRouter: Router = Router();

detalleCuentaRouter.get("/:idReservacion", detalleCuentaReservacionResponse);
// detalleCuentaRouter.get('/:id', controller.readOneRequest);
// detalleCuentaRouter.patch('/:id', controller.updateOneRequest);
detalleCuentaRouter.delete('/servicio/:idServicio', quitarServicioResponse);

export default detalleCuentaRouter;