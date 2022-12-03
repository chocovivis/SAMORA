import {Router} from "express";
import {createCliente,readCliente} from "../controllers/cliente.controller";


const clienteRouter: Router = Router();


clienteRouter.get("/", readCliente);
clienteRouter.post("/", createCliente);

export default clienteRouter;
