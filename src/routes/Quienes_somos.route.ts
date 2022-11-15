import {Router} from "express";
import { QuienesSomosController } from "../controllers/Quienes_somos.controllers";

const QuienesSomosRouter: Router = Router();

QuienesSomosRouter.get("/", QuienesSomosController);

export default QuienesSomosRouter;