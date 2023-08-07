import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import { login } from '../controllers/auth.controllers.js';



const authPath = '/auth/login/';

router.get(`${authPath}`);
router.get(`${authPath}:id`);
router.post(`${authPath}` , [
  check('Email', 'El correo no es valido').isEmail(),
  check('Password', 'La Constraseña es requerida').not().isEmpty(),
  validateDocuments
], login);
router.patch(`${authPath}:id`);

export default router;