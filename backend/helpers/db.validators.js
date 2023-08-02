//6. trasladamos desde usuario.routes la importacion del modelo Role
import Rols from './../models/Rol.js';
// 11. importamos modelo Usuario
import Usuario from './../models/Usuario.js'

// 5. Definicion funcion validador de rol y se exporta
export const isValidRole = async(rol= '')=>{
  const existeRol = await Rols.findOne({rol});
  if(!existeRol){
    throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
  };
};

 //7. trasladamos desde usuario.controllers funcion para 
 // Verificar si el correo ya existe (duplicado) y envolvemos en
 // funcion asincrona
export const emailExiste = async( email = '' ) => {
  const existeEmail = await Usuario.findOne({email});
  if(existeEmail){
    //12.  Gestionamos error.
    throw new Error(`El email: ${ email }, ya está registrado`);
  };
};

 //14.  Declaramos funcion de validacion de existencia de usuario por el ID findById
export const userExistsById = async( id ) => {

  // Verificar si el id existe
  const userExists = await Usuario.findById(id);
  if ( !userExists ) {
    throw new Error(`El id (usuario) no existe ${ id }`);
  };
};