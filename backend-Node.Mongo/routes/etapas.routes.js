import express from "express";

const router = express.Router();

import {obtenerEtapas, oneEtapas, agregarEtapas, borrarEtapas, actualizarEtapas} from "../controllers/etapa.controllers.js"

const path = `/etapa/`;

router.get(path, obtenerEtapas);
router.get(`${path}:id`, oneEtapas);
router.post(`${path}`, agregarEtapas);
router.delete(`${path}:id`, borrarEtapas);
router.patch(`${path}:id`, actualizarEtapas);

export default router;