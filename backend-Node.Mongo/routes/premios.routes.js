import express from "express";

const router = express.Router();

import {obtenerPremios, onePremios, agregarPremios, borrarPremios, actualizarPremios} from "../controllers/premios.controllers.js"

const path = `/premio/`;

router.get(path, obtenerPremios);
router.get(`${path}:id`, onePremios);
router.post(`${path}`, agregarPremios);
router.delete(`${path}:id`, borrarPremios);
router.patch(`${path}:id`, actualizarPremios);

export default router;