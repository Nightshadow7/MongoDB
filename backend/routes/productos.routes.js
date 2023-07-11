import express from "express";

const router = express.Router();

import {obtenerProductos, agregarProductos, borrarProductos, actualizarProductos} from "../controllers/producto.controllers.js"

router.get("/all", obtenerProductos);
router.post("/add", agregarProductos);
router.delete("/del/:id", borrarProductos);
router.patch("/upd/:id", actualizarProductos)

export default router;