import express from "express";
const router = express.Router();
import { validateDocuments } from "../middlewares/validate.documents.js";
import {check} from 'express-validator';
import { getUsuarios , oneUsuarios, postUsuarios, deleteUsuarios , updateUsuarios } from "../controllers/usuario.controllers.js"
import Rol from './../models/Rol.js';

const path = `/usuario/`;


router.get(path, getUsuarios);
router.get(`${path}:id`, oneUsuarios);
router.post(`${path}`, [
  check('Nombre', 'El Nombre no es valido').not().isEmpty(),
  check('Password', 'El Password debe ser minimo de 6 caracteres').isLength({min : 6}),
  check('Email', 'El correo no es valido').isEmail(),
  // check('Rol', 'El Rol no es un Rol valido').isIn(['ADMIN', 'USER']),
  check('role').custom(async(role = '')=>{
    const existeRol = await Rol.findOne({role});
    if(existeRol){
      throw new Error(`El rol ${role} no esta registrado en la base de datos`)
    }
  }),
  validateDocuments
],postUsuarios);
router.delete(`${path}:id`, deleteUsuarios);
router.patch(`${path}:id`, updateUsuarios);


export default router;