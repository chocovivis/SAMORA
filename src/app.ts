import express, { Application } from "express";
import path from 'path';
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
//Importando rutas
import indexRouter from './routes/index.route';
import habitacionRouter from "./routes/habitacion.route";
import reservacionesRouter from "./routes/reservaciones.route";
import detalleCuentaRouter from "./routes/detalle_cuenta.route";
import addserviceRouter from "./routes/addservice.route";
import cancelserviceRouter from "./routes/cancelservice.route";
import barra_lateralRouter from "./routes/barra_lateral.route";
import quienes_somosRouter from "./routes/Quienes_somos.route";
import verHabRouter from "./routes/inserthab.route";
import fileRouter from "./routes/file.route";
import pagosRouter from "./routes/pagos.route";
import adminRouter from "./routes/admin.route";
import serviciosRouter from "./routes/servicios.route";

//inicializaciones
const app:Application = express();

//configuraciones
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./public')))


//Routes
app.use('/',indexRouter);
app.use('/quienes-somos',quienes_somosRouter);
app.use('/habitaciones',habitacionRouter);
app.use('/reservaciones', reservacionesRouter);
app.use('/detalle-cuenta',detalleCuentaRouter);
app.use('/addservice',addserviceRouter);
app.use('/cancelservice',cancelserviceRouter);
app.use('/barra_lateral',barra_lateralRouter);
app.use('/pago',pagosRouter)
app.use('/catalogo/habitacion',verHabRouter);
app.use('/file',fileRouter);
app.use('/admon',adminRouter);
app.use('/servicios',serviciosRouter);

export default app;

