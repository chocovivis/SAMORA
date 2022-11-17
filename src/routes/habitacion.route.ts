import {Router} from "express";
import { habitacionResponse } from "../controllers/habitacion.controller";

const habitacionRouter: Router = Router();

habitacionRouter.get("/", habitacionResponse);

export default habitacionRouter;