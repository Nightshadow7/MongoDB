import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from './../middlewares/validate.documents.js';
import { validateJWT } from './../middlewares/validate.jwt.js';
import * as categoriaControllers from "./../controllers/categoria.controllers.js";
const router = Router();

const pathCategoria = `/categoria/`;

router.get(`${pathCategoria}`, categoriaControllers.getCategorias);
router.get(`${pathCategoria}:id`, categoriaControllers.getOneCategoria);
router.post(`${pathCategoria}`, [ 
  validateJWT, 
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  validateDocuments
] ,categoriaControllers.postCategoria);
router.delete(`${pathCategoria}:id`, categoriaControllers.deleteCategorias);
router.patch(`${pathCategoria}:id`, categoriaControllers.updateCategoria);


export default router;