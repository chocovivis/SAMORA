import express, { Application } from "express";
import path from 'path';
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
//Importando rutas
import indexRouter from './routes/index.route';
import menuRouter from "./routes/menu.route";
import QuienesSomosRouter from './routes/Quienes_somos.route'
//inicializaciones
const app:Application = express();

//configuraciones
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));

//middlewares
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./public')))


//Routes
app.use('/inicio',indexRouter);
app.use('/menu',menuRouter);
app.use('/menu/sobre-nosotros',QuienesSomosRouter);
export default app;

