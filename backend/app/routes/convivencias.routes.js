import { Router } from "express";
import * as convivenciaControllers from "./../controllers/convivencias.controllers.js";

const router = Router();
const pathConvivencia = `/convivencia/`;

router.get(`${pathConvivencia}`, convivenciaControllers.getConvivencias);
router.get(`${pathConvivencia}:id`, convivenciaControllers.getOneConvivencia);
router.post(`${pathConvivencia}`, convivenciaControllers.createConvivencias);
router.delete(`${pathConvivencia}:id`, convivenciaControllers.deleteConvivencias);
router.patch(`${pathConvivencia}:id`, convivenciaControllers.updateConvivencia);

export default router;