import { Router } from "express";
import { pagosResponse } from "../controllers/pagos.controller";

const pagosRouter: Router = Router();

pagosRouter.get("/:id",pagosResponse);

export default pagosRouter;