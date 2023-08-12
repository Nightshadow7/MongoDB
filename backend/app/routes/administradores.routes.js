import { Router } from "express";
import * as administradorControllers from "./../controllers/administradores.controllers.js";

const router = Router();
const pathAdministrador = `api/administrador/`;

router.get(`${pathAdministrador}`, administradorControllers.getAdministradores);
router.get(`${pathAdministrador}:id`, administradorControllers.getOneAdministrador);
router.post(`${pathAdministrador}`, administradorControllers.postAdministrador);
router.delete(`${pathAdministrador}:id`, administradorControllers.deleteAdministrador);
router.patch(`${pathAdministrador}:id`, administradorControllers.updateAdministrador);

export default router;