import { Router } from "express";
import * as administradorControllers from "./../controllers/administradores.controllers.js";

const router = Router();
const pathAdministrador = `/administrador/`;

router.get(`${pathAdministrador}`, administradorControllers.getAdministradores);
router.get(`${pathAdministrador}:id`, administradorControllers.getOneAdministrador);
router.post(`${pathAdministrador}`, administradorControllers.createAdministradores);
router.delete(`${pathAdministrador}:id`, administradorControllers.deleteAdministradores);
router.patch(`${pathAdministrador}:id`, administradorControllers.updateAdministrador);

export default router;