import { Router } from "express";
import * as cumpleañoControllers from "./../controllers/cumpleaños.controllers.js";

const router = Router();

router.get(`/`, cumpleañoControllers.getCumpleaños);
router.get(`/:id`, cumpleañoControllers.getOneCumpleaño);
router.post(`/`, cumpleañoControllers.postCumpleaño);
router.delete(`/:id`, cumpleañoControllers.deleteCumpleaño);
router.patch(`/:id`, cumpleañoControllers.updateCumpleaño);

export default router;