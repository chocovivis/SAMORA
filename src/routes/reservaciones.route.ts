import {Router} from "express";
import { reservacionesResponse } from "../controllers/reservaciones.controller";


const reservacionesRouter: Router = Router();

reservacionesRouter.get("/", reservacionesResponse);

export default reservacionesRouter;

