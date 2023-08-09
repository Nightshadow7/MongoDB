import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import * as centrosControllers from './../controllers/centro.controllers.js';



const centroPath = '/api/centros/';

router.get(`${centroPath}`, centrosControllers.getCentro);
router.get(`${centroPath}:id`, centrosControllers.getOneCentro);
router.post(`${centroPath}` , centrosControllers.postCentro);
router.delete(`${centroPath}:id`, centrosControllers.deleteCentros);
router.patch(`${centroPath}:id`, centrosControllers.updateCentro);

export default router;