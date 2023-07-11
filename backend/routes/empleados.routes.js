import express from "express";

const router = express.Router();

import {obtenerEmpleados, agregarEmpleados, borrarEmpleados, actualizarEmpleados} from "../controllers/empleado.controllers.js"

router.get("/all", obtenerEmpleados);
router.post("/add", agregarEmpleados);
router.delete("/del/:id", borrarEmpleados);
router.patch("/upd/:id", actualizarEmpleados)

export default router;