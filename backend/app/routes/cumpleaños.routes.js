import { Router } from "express";
import * as cumpleañoControllers from "./../controllers/cumpleaños.controllers.js";

const router = Router();
const pathCumpleaño = `/cumpleaño/`;

router.get(`${pathCumpleaño}`, cumpleañoControllers.getCumpleaños);
router.get(`${pathCumpleaño}:id`, cumpleañoControllers.getOneCumpleaño);
router.post(`${pathCumpleaño}`, cumpleañoControllers.createCumpleaños);
router.delete(`${pathCumpleaño}:id`, cumpleañoControllers.deleteCumpleaños);
router.patch(`${pathCumpleaño}:id`, cumpleañoControllers.updateCumpleaño);

export default router;