import { Router } from "express";
import * as rolControllers from "./../controllers/rols.controllers.js";

const router = Router();
const pathRol = `/rol/`;

router.get(`${pathRol}`, rolControllers.getRols);
router.get(`${pathRol}:id`, rolControllers.getOneRol);
router.post(`${pathRol}`, rolControllers.createRols);
router.delete(`${pathRol}:id`, rolControllers.deleteRols);
router.patch(`${pathRol}:id`, rolControllers.updateRol);

export default router;