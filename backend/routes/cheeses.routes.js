import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from './../middlewares/validate.documents.js';
import { validateJWT } from './../middlewares/validate.jwt.js';
import { isAdminRole } from '../middlewares/validate.rols.js';
import { categoriaExistById , cheeseExistById } from '../helpers/db.validators.js';
import * as cheesesControllers from "./../controllers/cheese.controllers.js";
const router = Router();

const pathCheese = `/cheese/`;

router.get(`${pathCheese}`, cheesesControllers.getCheeses);
router.get(`${pathCheese}:id`, [
  check('id', 'No es un id de Mongo Valido').isMongoId(),
  check('id').custom(cheeseExistById),
  validateDocuments
] , cheesesControllers.getOneCheese);
router.post(`${pathCheese}`, [ 
  validateJWT, 
  check('Nombre','El nombre es obligatorio').not().isEmpty(),
  check('Categoria' , 'No es un id de  Mongo').isMongoId(),
  check('Categoria').custom( categoriaExistById),
  validateDocuments
] ,cheesesControllers.postCheese);
router.delete(`${pathCheese}:id`, [
  validateJWT,
  isAdminRole,
  check('id' , 'no es un id de Mongo Valido').isMongoId(),
  check('id').custom(cheeseExistById),
  validateDocuments
] , cheesesControllers.deleteCheeses);
router.patch(`${pathCheese}:id`, [
  validateJWT,
  isAdminRole,
  check('id').custom( cheeseExistById),
  validateDocuments
] , cheesesControllers.updateCheese);

export default router;
