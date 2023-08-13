import { Router } from "express";
import * as temaControllers from "./../controllers/temas.controllers.js";

const router = Router();


router.get(`/`, temaControllers.getTemas);
router.get(`/:id`, temaControllers.getOneTema);
router.post(`/`, temaControllers.postTema);
router.delete(`/:id`, temaControllers.deleteTema);
router.patch(`/:id`, temaControllers.updateTema);

export default router;