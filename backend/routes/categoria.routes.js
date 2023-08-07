import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from './../middlewares/validate.documents.js';
import { validateJWT } from './../middlewares/validate.jwt.js';
import { isAdminRole } from '../middlewares/validate.rols.js';
import { categoriaExistById } from '../helpers/db.validators.js';
import * as categoriaControllers from "./../controllers/categoria.controllers.js";
const router = Router();

const pathCategoria = `/categoria/`;

router.get(`${pathCategoria}`, categoriaControllers.getCategorias);
router.get(`${pathCategoria}:id`, [
  check('id', 'No es un id de Mongo Valido').isMongoId(),
  check('id').custom(categoriaExistById),
  validateDocuments
] , categoriaControllers.getOneCategoria);
router.post(`${pathCategoria}`, [ 
  validateJWT, 
  check('Nombre','El nombre es obligatorio').not().isEmpty(),
  validateDocuments
] ,categoriaControllers.postCategoria);
router.delete(`${pathCategoria}:id`, [
  validateJWT,
  isAdminRole,
  check('id' , 'no es un id de Mongo Valido').isMongoId(),
  check('id').custom(categoriaExistById),
  validateDocuments
] , categoriaControllers.deleteCategorias);
router.patch(`${pathCategoria}:id`, [
  validateJWT,
  isAdminRole,
  check('Nombre' , 'En Nombre es obligatorio').not().isEmpty(),
  check('id').custom( categoriaExistById),
  validateDocuments
] , categoriaControllers.updateCategoria);


export default router;