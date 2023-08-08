import { Router } from "express";
import { check} from 'express-validator';
import { validateDocuments } from "../../middlewares/validate.documents.js";
import { validateJWT } from "../../middlewares/validate.jwt.js";
import { isNotUserRole } from "../../middlewares/validate.rols.js";
import { sexExistById } from "../helpers/db.validators.js";
import * as sexoControllers from "./../controllers/sexos.controllers.js";
//opcional quitarlo en caso que cualquiera con rango superior pueda jwt

const router = Router();
const pathSexo = `/sexo/`;

router.get(`${pathSexo}`, sexoControllers.getSexos);
router.get(`${pathSexo}:id`, [
  check('id' , 'No es un id de Mongo Valido').isMongoId(),
  check('id').custom(sexExistById),
  validateDocuments
] , sexoControllers.getOneSexo);
router.post(`${pathSexo}`, [
  validateJWT,
  isNotUserRole,
  check('Tipo' , 'El Tipo es obligatorio ').not().isEmpty(),
  validateDocuments
] , sexoControllers.createSexos);
router.delete(`${pathSexo}:id`, [
  validateJWT,
  isNotUserRole,
  check('id' , 'No es un id de Mongo Valido').isMongoId(),
  check('id').custom(sexExistById),
  validateDocuments
] , sexoControllers.deleteSexos);
router.patch(`${pathSexo}:id`, [
  validateJWT,
  isNotUserRole,
  check('id' , 'No es un id de Mongo Valido').isMongoId(),
  check('id').custom(sexExistById),
  validateDocuments
] , sexoControllers.updateSexo);

export default router; 