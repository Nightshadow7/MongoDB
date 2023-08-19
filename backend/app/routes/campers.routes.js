import { Router } from "express";
import * as camperControllers from "./../controllers/campers.controllers.js";

const router = Router();

router.get(`/`, camperControllers.getCampers);
router.get(`/:id`, camperControllers.getOneCamper);
router.post(`/`, camperControllers.postCamper);
router.delete(`/:id`, camperControllers.deleteCamper);
router.patch(`/:id`, camperControllers.updateCamper);

export default router;