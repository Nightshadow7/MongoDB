import { Router } from "express";
import * as moduloControllers from "./../controllers/modulos.controllers.js";

const router = Router();
const pathModulo = `/modulo/`;

router.get(`${pathModulo}`, moduloControllers.getModulos);
router.get(`${pathModulo}:id`, moduloControllers.getOneModulo);
router.post(`${pathModulo}`, moduloControllers.createModulos);
router.delete(`${pathModulo}:id`, moduloControllers.deleteModulos);
router.patch(`${pathModulo}:id`, moduloControllers.updateModulo);

export default router;