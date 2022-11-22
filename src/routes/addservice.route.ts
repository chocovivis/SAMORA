import {Router} from "express";
import { addserviceResponse} from "../controllers/addservice.controller";


const addserviceRouter: Router = Router();

addserviceRouter.get("/", addserviceResponse);

export default addserviceRouter;