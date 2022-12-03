import {Router} from "express";
import { adminResponse, unauthorizedResponse } from "../controllers/admin.controller";

import { createLogginMiddleware } from "../middlewares/loggin.middleware";

const adminRouter: Router = Router();
const protegerRutaFuncion = createLogginMiddleware(["*"]);
adminRouter.get("/",protegerRutaFuncion, adminResponse);
adminRouter.get("/unauthorized",unauthorizedResponse);

export default adminRouter;