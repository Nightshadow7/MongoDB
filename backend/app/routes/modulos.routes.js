import { Router } from "express";
import * as moduloControllers from "./../controllers/modulos.controllers.js";

const router = Router();

router.get(`/`, moduloControllers.getModulos);
router.get(`/:id`, moduloControllers.getOneModulo);
router.post(`/`, moduloControllers.postModulo);
router.delete(`/:id`, moduloControllers.deleteModulo);
router.patch(`/:id`, moduloControllers.updateModulo);

export default router;