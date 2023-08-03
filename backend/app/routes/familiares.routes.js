import { Router } from "express";
import * as familiarControllers from "./../controllers/familiares.controllers.js";

const router = Router();
const pathFamiliar = `/familiar/`;

router.get(`${pathFamiliar}`, familiarControllers.getFamiliares);
router.get(`${pathFamiliar}:id`, familiarControllers.getOneFamiliar);
router.post(`${pathFamiliar}`, familiarControllers.createFamiliares);
router.delete(`${pathFamiliar}:id`, familiarControllers.deleteFamiliares);
router.patch(`${pathFamiliar}:id`, familiarControllers.updateFamiliar);

export default router;