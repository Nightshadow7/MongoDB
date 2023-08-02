import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from './../middlewares/validate.documents.js';
import { validateJWT } from './../middlewares/validate.jwt.js';
import { getCategorias , getCategoria , postCategoria , deleteCategoria , updateCategoria} from './../controllers/categoria.controllers.js';
const router = Router();

const path = `/categoria/`;

// Crear categoria - privado - cualquier persona con un token válido
router.get(`${path}`,getCategorias);
router.get(`${path}:id`, getCategoria);
router.post(`${path}`, [ 
  validateJWT, 
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  validateDocuments
], postCategoria );
router.delete(`${path}`,deleteCategoria);
router.update(`${path}`, updateCategoria)







module.exports = router;