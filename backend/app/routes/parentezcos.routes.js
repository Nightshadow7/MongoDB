import { Router } from "express";
import * as parentezcoControllers from "./../controllers/parentezcos.controllers.js";

const router = Router();
const pathParentezco = `/parentezco/`;

router.get(`${pathParentezco}`, parentezcoControllers.getParentezcos);
router.get(`${pathParentezco}:id`, parentezcoControllers.getOneParentezco);
router.post(`${pathParentezco}`, parentezcoControllers.createParentezcos);
router.delete(`${pathParentezco}:id`, parentezcoControllers.deleteParentezcos);
router.patch(`${pathParentezco}:id`, parentezcoControllers.updateParentezco);

export default router;