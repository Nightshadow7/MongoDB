import { Router } from "express";
import { check} from 'express-validator';
import { validateDocuments } from "../../middlewares/validate.documents.js";
import * as sexoControllers from "./../controllers/sexos.controllers.js";
//opcional quitarlo en caso que cualquiera con rango superior pueda jwt

const router = Router();
const pathSexo = `/sexo/`;

router.get(`${pathSexo}`, sexoControllers.getSexos);
router.get(`${pathSexo}:id`, sexoControllers.getOneSexo);
router.post(`${pathSexo}` , sexoControllers.createSexos);
router.delete(`${pathSexo}:id`, sexoControllers.deleteSexos);
router.patch(`${pathSexo}:id`, sexoControllers.updateSexo);

export default router; 