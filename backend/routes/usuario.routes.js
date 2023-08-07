import { Router } from "express";
import {check } from 'express-validator';
import { validateDocuments } from "./../middlewares/validate.documents.js";
import { validateJWT } from "./../middlewares/validate.jwt.js";
import { isAdminRole } from './../middlewares/validate.rols.js';
import * as usuarioControllers from "../controllers/usuario.controllers.js";
import { isValidRole, emailExiste, userExistsById } from './../helpers/db.validators.js';

const pathUsuarios = `/usuarios/`;

const router = Router();

router.get(`${pathUsuarios}`, usuarioControllers.getUsuarios);
router.get(`${pathUsuarios}:id`, usuarioControllers.oneUsuarios);
router.post(`${pathUsuarios}`, [
  check('Nombre', 'El Nombre no es valido').not().isEmpty(),
  check('Password', 'El Password debe ser minimo de 6 caracteres').isLength({min : 6}),
  check('Email', 'El correo no es valido').isEmail(),
  check('Email').custom(emailExiste ),
  check('rol').custom(isValidRole),
  validateDocuments
],usuarioControllers.postUsuarios);
router.delete(`${pathUsuarios}:id`, [
  validateJWT,
  isAdminRole,
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( userExistsById ),
  validateDocuments
] , usuarioControllers.deleteUsuarios);
router.patch(`${pathUsuarios}:id`, [
  check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
  check('id').custom( userExistsById ),
  check('rol').custom(isValidRole),
  validateDocuments
] , usuarioControllers.updateUsuarios);

export default router;