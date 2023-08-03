import { Router } from "express";
import * as mesControllers from "./../controllers/meses.controllers.js";

const router = Router();
const pathMes = `/mes/`;

router.get(`${pathMes}`, mesControllers.getMeses);
router.get(`${pathMes}:id`, mesControllers.getOneMes);
router.post(`${pathMes}`, mesControllers.createMeses);
router.delete(`${pathMes}:id`, mesControllers.deleteMeses);
router.patch(`${pathMes}:id`, mesControllers.updateMes);

export default router;