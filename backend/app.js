import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import productosRouter from "./routes/productos.routes.js";
import cors from "cors"
import Server from "./models/server.js";

const app = express();

app.use(express.json());
app.use(cors())

const config = dotenv.config();

const server = new Server();
server.listen();