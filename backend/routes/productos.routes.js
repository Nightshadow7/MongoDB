import express from "express";

const router = express.Router();

import {obtenerProductos, oneProductos , agregarProductos, borrarProductos, actualizarProductos} from "../controllers/producto.controllers.js"

router.get("/producto/", obtenerProductos);
router.get("/producto/:id", oneProductos);
router.post("/producto/", agregarProductos);
router.delete("/producto/:id", borrarProductos);
router.patch("/producto/:id", actualizarProductos)

export default router;