import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import productosRouter from "./routes/productos.routes.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/categoria", categoriasRouter);
app.use("/cliente", clientesRouter);
app.use("/empleado", empleadosRouter);
app.use("/producto" , productosRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);   
})