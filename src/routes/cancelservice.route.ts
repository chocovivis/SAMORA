import {Router} from "express";
import { cancelserviceResponse } from "../controllers/cancelservice.controller";


const cancelserviceRouter: Router = Router();

cancelserviceRouter.get("/", cancelserviceResponse);

export default cancelserviceRouter;