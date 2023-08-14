import { Router } from "express";
import * as mesControllers from "./../controllers/meses.controllers.js";

const router = Router();

router.get(`/`, mesControllers.getMeses);
router.get(`/:id`, mesControllers.getOneMes);
router.post(`/`, mesControllers.postMes);
router.delete(`/:id`, mesControllers.deleteMes);
router.patch(`/:id`, mesControllers.updateMes);

export default router;