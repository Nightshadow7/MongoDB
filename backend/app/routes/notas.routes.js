import { Router } from "express";
import * as notasControllers from "./../controllers/notas.controllers.js";

const router = Router();

router.get(`/`, notasControllers.getNotas);
router.get(`/:id`, notasControllers.getOneNota);
router.post(`/`, notasControllers.postNota);
router.delete(`/:id`, notasControllers.deleteNota);
router.patch(`/:id`, notasControllers.updateNota);

export default router; 