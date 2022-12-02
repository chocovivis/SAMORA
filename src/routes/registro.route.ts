import { Router } from "express";
import { registroResponse } from "../controllers/registro.controller";

const registroRouter: Router = Router();

registroRouter.get("/",registroResponse);

export default registroRouter;