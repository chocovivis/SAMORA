import { Router } from "express";
import { pagosResponse } from "../controllers/pagos.controller";

const pagosRouter: Router = Router();

pagosRouter.get("/",pagosResponse);

export default pagosRouter;