import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import * as rutaControllers from './../controllers/ruta.controllers.js';



const rutaPath = '/api/rutas/';

router.get(`${rutaPath}`, rutaControllers.getRuta);
router.get(`${rutaPath}:id`, rutaControllers.getOneRuta);
router.post(`${rutaPath}` , rutaControllers.postRuta);
router.delete(`${rutaPath}:id`, rutaControllers.deleteRuta);
router.patch(`${rutaPath}:id`, rutaControllers.updateRuta);

export default router;