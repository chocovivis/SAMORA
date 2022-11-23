import {Router} from "express";
import { barra_lateralResponse } from "../controllers/barra_lateral.controller";

const barra_lateralRouter: Router = Router();

barra_lateralRouter.get("/", barra_lateralResponse);

export default barra_lateralRouter;