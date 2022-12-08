import {Router} from "express";
import { reporteResponse } from "../controllers/reporte.controller";

const reporteRouter: Router = Router();

reporteRouter.get("/", reporteResponse);


export default reporteRouter;

