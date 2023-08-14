import { Router } from "express";
import * as grupoControllers from "./../controllers/grupos.controllers.js";

const router = Router();

router.get(`/`, grupoControllers.getGrupos);
router.get(`/:id`, grupoControllers.getOneGrupo);
router.post(`/`, grupoControllers.postGrupo);
router.delete(`/:id`, grupoControllers.deleteGrupo);
router.patch(`/:id`, grupoControllers.updateGrupo);

export default router;