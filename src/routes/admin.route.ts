import {Router} from "express";
import { adminResponse } from "../controllers/admin.controller";

const adminRouter: Router = Router();

adminRouter.get("/", adminResponse);

export default adminRouter;