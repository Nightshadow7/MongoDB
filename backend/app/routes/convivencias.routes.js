import { Router } from "express";
import * as convivenciaControllers from "./../controllers/convivencias.controllers.js";

const router = Router();

router.get(`/`, convivenciaControllers.getConvivencias);
router.get(`/:id`, convivenciaControllers.getOneConvivencia);
router.post(`/`, convivenciaControllers.postConvivencia);
router.delete(`/:id`, convivenciaControllers.deleteConvivencia);
router.patch(`/:id`, convivenciaControllers.updateConvivencia);

export default router;