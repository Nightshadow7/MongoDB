import { Router } from "express";
import * as cronogramaControllers from "./../controllers/cronogramas.controllers.js";

const router = Router();
const pathCronograma = `/cronograma/`;

router.get(`${pathCronograma}`, cronogramaControllers.getCronogramas);
router.get(`${pathCronograma}:id`, cronogramaControllers.getOneCronograma);
router.post(`${pathCronograma}`, cronogramaControllers.createCronogramas);
router.delete(`${pathCronograma}:id`, cronogramaControllers.deleteCronogramas);
router.patch(`${pathCronograma}:id`, cronogramaControllers.updateCronograma);

export default router;