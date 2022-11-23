import { Router } from "express";
import { quienes_somosResponse } from "../controllers/quienes_somos.controller";

const quienes_somosRouter: Router = Router();

quienes_somosRouter.get("/", quienes_somosResponse);

export default quienes_somosRouter;