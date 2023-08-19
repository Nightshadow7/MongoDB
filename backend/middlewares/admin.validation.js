import { check } from "express-validator";
import {validateDocuments} from "./validate.documents.js";
import { adminExistsById } from "../app/helpers/db.validators.js";
import { validateAdminJWT } from "./validate.jwt.js";
import { isNotadminRole } from "./validate.rols.js";

export const adminValidationGet = [
  validateAdminJWT,
  isNotadminRole,
  validateDocuments
];
export const adminValidationGetId = [
  validateAdminJWT,
  check('id' , 'No es un Id de Mongo valida').isMongoId(),
  check('id').custom(adminExistsById),
  validateDocuments
];
export const adminValidationPost = [
  validateAdminJWT,

  validateDocuments
];
export const adminValidationDelete = [
  validateAdminJWT,
  check('id' , 'No es un Id de Mongo valida').isMongoId(),
  check('id').custom(adminExistsById),
  validateDocuments
]
export const adminValidationPatch = [
  validateAdminJWT,
  validateDocuments
]