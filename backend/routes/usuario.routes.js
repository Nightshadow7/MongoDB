import { Router } from "express";
import { validateDocuments } from "./../middlewares/validate.documents.js";
import {check } from 'express-validator';
import { validateJWT } from "./../middlewares/validate.jwt.js";
import { isAdminRole } from './../middlewares/validate.rols.js';
import { getUsuarios , oneUsuarios, postUsuarios, deleteUsuarios , updateUsuarios } from "../controllers/usuario.controllers.js";
import { isValidRole, emailExiste, userExistsById } from './../helpers/db.validators.js';

import Rol from './../models/Rol.js';

const path = `/usuario/`;

const router = Router();

router.get(path, getUsuarios);
router.get(`${path}:id`, oneUsuarios);
router.post(`${path}`, [
  check('Nombre', 'El Nombre no es valido').not().isEmpty(),
  check('Password', 'El Password debe ser minimo de 6 caracteres').isLength({min : 6}),
  check('Email', 'El correo no es valido').isEmail(),
  //9. middleware y express validator si emailExiste
  check('Email').custom(emailExiste ),
  //4.  Invocamos funcion validar de rol (cuerpo trasladado a helpers)
  check('rol').custom(isValidRole),
  // check('Rol', 'El Rol no es un Rol valido').isIn(['ADMIN', 'USER']),
  validateDocuments
],postUsuarios);
router.delete(`${path}:id`, [
  //23. Se Crea nuevo Middleware "validate.JWT" en carpeta, para evitar que 
  //se ejecute esta ruta borrar, sino existe un json web token valido
  validateJWT,
//24. se crea Middleware validador de roles en carpeta, para evitar que
//un usuario que intenta borrar, solo pueda si tiene rol de admin
  isAdminRole,   
//22. creamos middleware para chequear (copio desde put) para validar 
//que sea un id Valido
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( userExistsById ),
  validateDocuments
] , deleteUsuarios);
router.put(`${path}:id`, [
  check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
        //13. agregamos validacion perzonalizada de usuario por ID
        check('id').custom( userExistsById ),
        //16. copiamos validacion de rol desde metodo POST
        check('rol').custom(isValidRole),
        validateDocuments
] , updateUsuarios);

export default router;