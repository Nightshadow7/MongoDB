import express from "express";

const router = express.Router();

import {obtenerClientes, agregarClientes, borrarClientes, actualizarClientes} from "../controllers/cliente.controllers.js"

router.get("/all", obtenerClientes);
router.post("/add", agregarClientes);
router.delete("/del/:id", borrarClientes);
router.patch("/upd/:id", actualizarClientes)

export default router;