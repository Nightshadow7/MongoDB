import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import * as rolsControllers from './../controllers/rol.controllers.js';



const rolPath = '/api/rols/';

router.get(`${rolPath}`, rolsControllers.getRol);
router.get(`${rolPath}:id`, rolsControllers.getOneRol);
router.post(`${rolPath}` , rolsControllers.postRol);
router.delete(`${rolPath}:id`, rolsControllers.deleteRols);
router.patch(`${rolPath}:id`, rolsControllers.updateRol);

export default router;