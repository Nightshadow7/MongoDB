import express from "express";

const router = express.Router();

import {obtenerEmpleados, oneEmpleados , agregarEmpleados, borrarEmpleados, actualizarEmpleados} from "../controllers/empleado.controllers.js"

router.get("/empleado/all", obtenerEmpleados);
router.get("/empleado/one/:id", oneEmpleados);
router.post("/empleado/add", agregarEmpleados);
router.delete("/empleado/del/:id", borrarEmpleados);
router.patch("/empleado/upd/:id", actualizarEmpleados)

export default router;