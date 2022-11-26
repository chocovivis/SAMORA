import {Router} from "express";
import { detalle_cuentaResponse } from "../controllers/detalle_cuenta.controller";


const detalleCuentaRouter: Router = Router();

detalleCuentaRouter.get("/", detalle_cuentaResponse);

export default detalleCuentaRouter;