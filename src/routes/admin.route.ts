import {Router} from "express";
import { adminResponse, unauthorizedResponse } from "../controllers/admin.controller";
import { validaRutaEmpleado } from "../middlewares/empleado.middleware";


const adminRouter: Router = Router();

adminRouter.get("/", validaRutaEmpleado, adminResponse);
adminRouter.get("/unauthorized",unauthorizedResponse);

export default adminRouter;