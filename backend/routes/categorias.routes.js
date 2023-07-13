import express from "express";

const router = express.Router();

import {obtenerCategorias, oneCategorias, agregarCategoria, borrarCategorias, actualizarCategorias} from "../controllers/categoria.controllers.js"

router.get("/categoria/", obtenerCategorias);
router.get("/categoria/:id", oneCategorias);
router.post("/categoria/add", agregarCategoria);
router.delete("/categoria/del/:id", borrarCategorias);
router.patch("/categoria/upd/:id", actualizarCategorias)

export default router;