import express from "express";

const router = express.Router();

import {obtenerEmpleados, oneEmpleados , agregarEmpleados, borrarEmpleados, actualizarEmpleados} from "../controllers/empleado.controllers.js"

router.get("/empleado/", obtenerEmpleados);
router.get("/empleado/:id", oneEmpleados);
router.post("/empleado/", agregarEmpleados);
router.delete("/empleado/:id", borrarEmpleados);
router.patch("/empleado/:id", actualizarEmpleados)

export default router;