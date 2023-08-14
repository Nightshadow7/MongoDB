import { Router } from "express";
import * as entrevistaControllers from "./../controllers/entrevistas.controllers.js";

const router = Router();

router.get(`/`, entrevistaControllers.getEntrevistas);
router.get(`/:id`, entrevistaControllers.getOneEntrevista);
router.post(`/`, entrevistaControllers.postEntrevista);
router.delete(`/:id`, entrevistaControllers.deleteEntrevista);
router.patch(`/:id`, entrevistaControllers.updateEntrevista);

export default router;