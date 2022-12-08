import {Router} from "express";
import { addserviceResponse} from "../controllers/addservice.controller";
import { validaRutaCliente } from "../middlewares/cliente.middleware";


const addserviceRouter: Router = Router();

addserviceRouter.get("/",validaRutaCliente, addserviceResponse);

export default addserviceRouter;