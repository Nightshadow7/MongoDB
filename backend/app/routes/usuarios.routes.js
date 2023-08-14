import { Router } from 'express';
import * as usuarioControllers from './../controllers/usuarios.controllers.js';

const router = Router();

router.get(`/`, usuarioControllers.getUsuarios);
router.get(`/:id`, usuarioControllers.getOneUsuario)
router.post(`/`, usuarioControllers.postUsuario);
router.delete(`/:id`, usuarioControllers.deleteUsuario);
router.patch(`/:id`, usuarioControllers.updateUsuario);

export default router;