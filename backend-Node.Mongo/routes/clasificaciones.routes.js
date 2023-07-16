import express from "express";

const router = express.Router();

import {obtenerClasificaciones, oneClasificaciones, agregarClasificaciones, borrarClasificaciones, actualizarClasificaciones} from "../controllers/clasificacion.controllers.js"

const path = `/clasificacion/`;

router.get(path, obtenerClasificaciones);
router.get(`${path}:id`, oneClasificaciones);
router.post(`${path}`, agregarClasificaciones);
router.delete(`${path}:id`, borrarClasificaciones);
router.patch(`${path}:id`, actualizarClasificaciones);

export default router;