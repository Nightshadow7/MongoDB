import { Router } from "express";
import * as administradorControllers from "./../controllers/administradores.controllers.js";
import * as adminMiddlewares from "./../../middlewares/admin.validation.js";

const router = Router();

router.get(`/`, [adminMiddlewares.adminValidationGet] ,administradorControllers.getAdministradores);
router.get(`/:id`, administradorControllers.getOneAdministrador);
router.post(`/`, administradorControllers.postAdministrador);
router.delete(`/:id`, administradorControllers.deleteAdministrador);
router.patch(`/:id`, administradorControllers.updateAdministrador);

export default router;