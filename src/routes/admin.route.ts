import {Router} from "express";
import { adminResponse, unauthorizedResponse } from "../controllers/admin.controller";

const adminRouter: Router = Router();

adminRouter.get("/", adminResponse);
adminRouter.get("/unauthorized",unauthorizedResponse);

export default adminRouter;