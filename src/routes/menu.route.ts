import {Router} from "express";
import { menuResponse } from "../controllers/menu.controller";

const menuRouter: Router = Router();

menuRouter.get("/", menuResponse);

export default menuRouter;