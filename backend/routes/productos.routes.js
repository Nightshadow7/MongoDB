import express from "express";

const router = express.Router();

import {obtenerProductos, oneProductos , agregarProductos, borrarProductos, actualizarProductos} from "../controllers/producto.controllers.js"

router.get("/producto/all", obtenerProductos);
router.get("/producto/one/:id", oneProductos);
router.post("/producto/add", agregarProductos);
router.delete("/producto/del/:id", borrarProductos);
router.patch("/producto/upd/:id", actualizarProductos)

export default router;