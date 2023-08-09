import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import { validateJWT } from './../middlewares/validate.jwt.js';
import { isAdminRole } from '../middlewares/validate.rols.js';
import * as campersControllers from './../controllers/camper.controllers.js';



const camperPath = '/api/campers/';

router.get(`${camperPath}`, campersControllers.getCamper);
router.get(`${camperPath}:id`, campersControllers.getOneCamper);
router.post(`${camperPath}` , [
  validateJWT, 
  check('Nombre','El nombre es obligatorio').not().isEmpty(),
  check('NroIdentificacion' , 'obligatoria').not().isEmpty(),
  check('Rol').custom( isAdminRole),
  validateDocuments
] , campersControllers.postCamper);
router.delete(`${camperPath}:id`, campersControllers.deleteCampers);
router.patch(`${camperPath}:id`, campersControllers.updateCamper);

export default router;