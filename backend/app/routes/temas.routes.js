import { Router } from "express";
import * as temaControllers from "./../controllers/temas.controllers.js";

const router = Router();
const pathTema = `/tema/`;

router.get(`${pathTema}`, temaControllers.getTemas);
router.get(`${pathTema}:id`, temaControllers.getOneTema);
router.post(`${pathTema}`, temaControllers.createTemas);
router.delete(`${pathTema}:id`, temaControllers.deleteTemas);
router.patch(`${pathTema}:id`, temaControllers.updateTema);

export default router;