import { check } from "express-validator";
import { validateDocuments } from "./validate.documents.js";

export const authMiddleware = [
    check('Email', 'Favor ingresar un email válido').isEmail(),
    check('Email', 'El email es obligatorio').not().isEmpty(),
    check('Password', 'La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
];