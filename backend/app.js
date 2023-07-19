import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ciclistasRouter from "./routes/ciclistas.routes.js";
import clasificacionesRouter from "./routes/clasificaciones.routes.js";
import equiposRouter from "./routes/equipos.routes.js";
import etapasRouter from "./routes/etapas.routes.js";
import premiosRouter from "./routes/premios.routes.js";
import resultadosRouter from "./routes/resultados.routes.js";


import cors from "cors"
import Server from "./models/server.js";

const app = express();

app.use(express.json());
app.use(cors())

const config = dotenv.config();

const server = new Server();
server.listen();