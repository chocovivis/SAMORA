import {Router} from "express";
import { QuienesSomosController } from "../controllers/Quienes_somos.controller";

const QuienesSomosRouter: Router = Router();

QuienesSomosRouter.get("/", QuienesSomosController);

export default QuienesSomosRouter;