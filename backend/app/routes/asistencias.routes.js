import { Router } from "express";
import * as asistenciaControllers from "../controllers/asistencias.controllers.js";

const router = Router();
const pathAsistencia = `/asistencias/`;

router.get(`${pathAsistencia}`, asistenciaControllers.getAsistencias);
router.get(`${pathAsistencia}:id`, asistenciaControllers.getOneAsistencia);
router.post(`${pathAsistencia}`, asistenciaControllers.postAsistencia);
router.delete(`${pathAsistencia}:id`, asistenciaControllers.deleteAsistencia);
router.patch(`${pathAsistencia}:id`, asistenciaControllers.updateAsistencia);

export default router;