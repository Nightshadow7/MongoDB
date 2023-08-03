import { Router } from "express";
import * as sexoControllers from "./../controllers/sexos.controllers.js";

const router = Router();
const pathSexo = `/sexo/`;

router.get(`${pathSexo}`, sexoControllers.getSexos);
router.get(`${pathSexo}:id`, sexoControllers.getOneSexo);
router.post(`${pathSexo}`, sexoControllers.createSexos);
router.delete(`${pathSexo}:id`, sexoControllers.deleteSexos);
router.patch(`${pathSexo}:id`, sexoControllers.updateSexo);

export default router; 