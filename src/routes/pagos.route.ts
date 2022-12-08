import { Router } from "express";
import { pagosResponse } from "../controllers/pagos.controller";
import { validaRutaCliente } from "../middlewares/cliente.middleware";

const pagosRouter: Router = Router();

pagosRouter.get("/:id",validaRutaCliente,pagosResponse);

export default pagosRouter;