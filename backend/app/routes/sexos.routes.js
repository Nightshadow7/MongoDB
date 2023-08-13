import { Router } from "express";
import { check} from 'express-validator';
import { validateDocuments } from "../../middlewares/validate.documents.js";
import * as sexoControllers from "./../controllers/sexos.controllers.js";
//opcional quitarlo en caso que cualquiera con rango superior pueda jwt

const router = Router();

router.get(`/`, sexoControllers.getSexos);
router.get(`/:id`, sexoControllers.getOneSexo);
router.post(`/` , sexoControllers.postSexo);
router.delete(`/:id`, sexoControllers.deleteSexo);
router.patch(`/:id`, sexoControllers.updateSexo);

export default router; 