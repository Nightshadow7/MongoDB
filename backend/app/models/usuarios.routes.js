import express from 'express';
import { getUsuarios , getUsuario , createUsuarios , deleteUsuarios , updateUsuarios } from '../controllers/usuarios.controllers';
const router = express.Router();

router.get(`/`, getUsuarios);
router.get(`/:id`, getUsuario)
router.post(`/`, createUsuarios);
router.delete(`/:id`, deleteUsuarios);
router.patch(`/:id`, updateUsuarios);

export default router;