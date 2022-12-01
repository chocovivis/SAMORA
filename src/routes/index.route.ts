import {Router} from "express";
import { indexResponse, unauthorizedResponse } from "../controllers/index.controller";



const indexRouter: Router = Router();

indexRouter.get("/", indexResponse);
indexRouter.get("/unauthorized",unauthorizedResponse);

export default indexRouter;


