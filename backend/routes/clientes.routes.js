import express from "express";

const router = express.Router();

import {obtenerClientes, oneClientes, agregarClientes, borrarClientes, actualizarClientes} from "../controllers/cliente.controllers.js"

router.get("/cliente/", obtenerClientes);
router.get("/cliente/:id", oneClientes);
router.post("/cliente/", agregarClientes);
router.delete("/cliente/:id", borrarClientes);
router.patch("/cliente/:id", actualizarClientes)

export default router;