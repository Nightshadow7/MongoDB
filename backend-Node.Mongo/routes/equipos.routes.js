import express from "express";

const router = express.Router();

import {obtenerEquipos, oneEquipos, agregarEquipos, borrarEquipos, actualizarEquipos} from "../controllers/equipo.controllers.js"

const path = `/equipo/`;

router.get(path, obtenerEquipos);
router.get(`${path}:id`, oneEquipos);
router.post(`${path}`, agregarEquipos);
router.delete(`${path}:id`, borrarEquipos);
router.patch(`${path}:id`, actualizarEquipos);

export default router;