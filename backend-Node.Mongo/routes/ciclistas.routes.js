import express from "express";

const router = express.Router();

import {obtenerCiclistas, oneCiclistas, agregarCiclistas, borrarCiclistas, actualizarCiclistas} from "../controllers/ciclista.controllers.js"

const path = `/ciclista/`;

router.get(path, obtenerCiclistas);
router.get(`${path}:id`, oneCiclistas);
router.post(`${path}`, agregarCiclistas);
router.delete(`${path}:id`, borrarCiclistas);
router.patch(`${path}:id`, actualizarCiclistas);

export default router;
