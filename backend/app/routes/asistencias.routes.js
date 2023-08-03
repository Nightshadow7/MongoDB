import { Router } from "express";
import * as asistenciaControllers from "../controllers/asistencias.controllers.js";

const router = Router();
const pathAsistencia = `/asistencia/`;

router.get(`${pathAsistencia}`, asistenciaControllers.getAsistencias);
router.get(`${pathAsistencia}:id`, asistenciaControllers.getOneAsistencia);
router.post(`${pathAsistencia}`, asistenciaControllers.createAsistencias);
router.delete(`${pathAsistencia}:id`, asistenciaControllers.deleteAsistencias);
router.patch(`${pathAsistencia}:id`, asistenciaControllers.updateAsistencias);

export default router;