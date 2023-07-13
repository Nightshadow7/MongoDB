import express from "express";

const router = express.Router();

import {obtenerClientes, oneClientes, agregarClientes, borrarClientes, actualizarClientes} from "../controllers/cliente.controllers.js"

router.get("/cliente/", obtenerClientes);
router.get("/cliente/one/:id", oneClientes);
router.post("/cliente/add", agregarClientes);
router.delete("/cliente/del/:id", borrarClientes);
router.patch("/cliente/upd/:id", actualizarClientes)

export default router;