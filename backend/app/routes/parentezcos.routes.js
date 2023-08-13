import { Router } from "express";
import * as parentezcoControllers from "./../controllers/parentezcos.controllers.js";

const router = Router();

router.get(`/`, parentezcoControllers.getParentezcos);
router.get(`/:id`, parentezcoControllers.getOneParentezco);
router.post(`/`, parentezcoControllers.postParentezco);
router.delete(`/:id`, parentezcoControllers.deleteParentezco);
router.patch(`/:id`, parentezcoControllers.updateParentezco);

export default router;