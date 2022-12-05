import { Router } from "express";
import { registroResponse } from "../controllers/registro.controller";
import { createUsuario } from "../controllers/usuario.controller";
import {
  cifrarContraseniaUsuarioMiddleware,
  createContraseniaUsuarioMiddleware,
} from "../middlewares/usuario.middleware";

const registroRouter: Router = Router();

registroRouter.get("/", registroResponse);
registroRouter.post(
  "/crear",
  createContraseniaUsuarioMiddleware,
  cifrarContraseniaUsuarioMiddleware,
  createUsuario
);

export default registroRouter;
