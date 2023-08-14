import { Router } from "express";
import * as asistenciaControllers from "../controllers/asistencias.controllers.js";

const router = Router();

router.get(`/`, asistenciaControllers.getAsistencias);
router.get(`/:id`, asistenciaControllers.getOneAsistencia);
router.post(`/`, asistenciaControllers.postAsistencia);
router.delete(`/:id`, asistenciaControllers.deleteAsistencia);
router.patch(`/:id`, asistenciaControllers.updateAsistencia);

export default router;