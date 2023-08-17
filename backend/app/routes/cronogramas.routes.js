import { Router } from "express";
import * as cronogramaControllers from "./../controllers/cronogramas.controllers.js";

const router = Router();

router.get(`/`, cronogramaControllers.getCronogramas);
router.get(`/:id`, cronogramaControllers.getOneCronograma);
router.post(`/`, cronogramaControllers.postCronograma);
router.delete(`/:id`, cronogramaControllers.deleteCronograma);
router.patch(`/:id`, cronogramaControllers.updateCronograma);

export default router;