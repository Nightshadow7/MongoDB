import express from "express";

const router = express.Router();

import {obtenerResultados, oneResultados, agregarResultados, borrarResultados, actualizarResultados} from "../controllers/resultado.controllers.js"

const path = `/resultado/`;

router.get(path, obtenerResultados);
router.get(`${path}:id`, oneResultados);
router.post(`${path}`, agregarResultados);
router.delete(`${path}:id`, borrarResultados);
router.patch(`${path}:id`, actualizarResultados);

export default router;