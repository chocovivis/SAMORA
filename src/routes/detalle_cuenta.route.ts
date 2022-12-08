import {Router} from "express";
import { detalleCuentaReservacionResponse, quitarServicioResponse } from "../controllers/detalle_cuenta.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const detalleCuentaRouter: Router = Router();

detalleCuentaRouter.get("/:idReservacion",validaRutaEmpleado, detalleCuentaReservacionResponse);
// detalleCuentaRouter.get('/:id', controller.readOneRequest);
// detalleCuentaRouter.patch('/:id', controller.updateOneRequest);
detalleCuentaRouter.delete('/servicio/:idServicio',validaRutaEmpleado, quitarServicioResponse);

export default detalleCuentaRouter;