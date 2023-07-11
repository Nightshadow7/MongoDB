import express from "express";

const router = express.Router();

import {obtenerCategorias, agregarCategoria, borrarCategorias, actualizarCategorias} from "../controllers/categoria.controllers.js"

router.get("/all", obtenerCategorias);
router.post("/add", agregarCategoria);
router.delete("/del/:id", borrarCategorias);
router.patch("/upd/:id", actualizarCategorias)

export default router;