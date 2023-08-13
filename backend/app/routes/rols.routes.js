import { Router } from "express";
import * as rolControllers from "./../controllers/rols.controllers.js";

const router = Router();

router.get(`/`, rolControllers.getRol);
router.get(`/:id`, rolControllers.getOneRol);
router.post(`/`, rolControllers.postRol);
router.delete(`/:id`, rolControllers.deleteRol);
router.patch(`/:id`, rolControllers.updateRol);

export default router;