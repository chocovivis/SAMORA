import {Router} from "express";
import { servicioResponse } from "../controllers/servicio.controller";


const servicioRouter: Router = Router();

servicioRouter.get("/", servicioResponse);

export default servicioRouter;

