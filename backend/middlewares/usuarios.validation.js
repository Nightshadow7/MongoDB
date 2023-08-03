import { check } from "express-validator";
import validateDocuments from "./validateDocuments.js";
import Usuario from "../models/Usuario.js";
// import Rol from "../models/Rol.js";

const usuarioMiddleware = [
    check('Nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('Password', 'La contraseña debe tener mínimo 6 caracteres').isLength({min:6}),
    check('Email', 'El email no es válido').isEmail(),
    check('Email').custom(async (email = '') => {
        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            throw new Error(`El email ya se encuentra registrado. Intente con otro.`);
        }
    }),
    // check('rol').custom(async (rol = '') => {
    //     if(rol){
    //         const existeRol = await Rol.find({rol});
    //         if(existeRol == false){
    //             throw new Error(`El rol '${rol}' no se encuentra registrado en la base de datos.`);
    //         }
    //     }
    // }),
    validateDocuments
];

export default usuarioMiddleware;