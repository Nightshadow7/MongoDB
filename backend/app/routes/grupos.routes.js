import { Router } from "express";
import * as grupoControllers from "./../controllers/grupos.controllers.js";

const router = Router();
const pathGrupo = `/grupo/`;

router.get(`${pathGrupo}`, grupoControllers.getGrupos);
router.get(`${pathGrupo}:id`, grupoControllers.getOneGrupo);
router.post(`${pathGrupo}`, grupoControllers.createGrupos);
router.delete(`${pathGrupo}:id`, grupoControllers.deleteGrupos);
router.patch(`${pathGrupo}:id`, grupoControllers.updateGrupo);

export default router;