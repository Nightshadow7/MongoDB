import { Router } from "express";
import * as notasControllers from "./../controllers/notas.controllers.js";

const router = Router();
const pathNotas = `/notas/`;

router.get(`${pathNotas}`, notasControllers.getNotas);
router.get(`${pathNotas}:id`, notasControllers.getOneNota);
router.post(`${pathNotas}`, notasControllers.createNotas);
router.delete(`${pathNotas}:id`, notasControllers.deleteNotas);
router.patch(`${pathNotas}:id`, notasControllers.updateNota);

export default router; 