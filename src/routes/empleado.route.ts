import {Router} from "express";
import { createEmpleado,readEmpleado } from "../controllers/empleado.controller";


const empleadoRouter: Router = Router();

empleadoRouter.get("/", readEmpleado);
empleadoRouter.post("/", createEmpleado);


export default empleadoRouter;
