import {Router} from "express";
import { adminResponse } from "../controllers/admin.controller";

import { createLogginMiddleware } from "../middlewares/loggin.middleware";

const adminRouter: Router = Router();
const protegerRutaFuncion = createLogginMiddleware(["*"]);
adminRouter.get("/",protegerRutaFuncion, adminResponse);

export default adminRouter;