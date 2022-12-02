import { Router } from "express";
import { serviciosResponse } from "../controllers/servicios.controller";

const serviciosRouter: Router = Router();

serviciosRouter.get("/",serviciosResponse);

export default serviciosRouter;