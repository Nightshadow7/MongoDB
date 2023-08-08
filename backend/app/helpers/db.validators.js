import Rols from './../models/Rols.js';
import Sexo from '../models/Sexo.js';
import Usuario from './../models/Usuario.js';

export const isValidRole = async(Rol = '')=>{
  const existeRol = await Rols.findOne({Rol});
  if(existeRol){
    throw new Error(`El rol ${Rol} no esta registrado en la base de datos`);
  };
};

export const emailExiste = async( email = '' ) => {
  const existeEmail = await Usuario.findOne({email});
  if(existeEmail){
    throw new Error(`El email: ${ email }, ya está registrado`);
  };
};

export const userExistsById = async( id ) => {
  const userExists = await Usuario.findById(id);
  if ( !userExists ) {
    throw new Error(`El id (usuario) no existe ${ id }`);
  };
};

export const sexExistById = async ( id ) => {
  const findSex = await Sexo.findById( id);
  if (!findSex){
    throw new Error(`El id del Sexo: ${ id } no esta registrado`)
  };
};

// export const categoriaExistById = async( id ) => {
//   const findCategory = await Categoria.findById(id);
//   if ( !findCategory ) {
//     throw new Error(`El id de categoria no existe ${ id }`);
//   };
// };
// export const cheeseExistById = async( id ) => {
//   const findCheese = await Cheese.findById(id);
//   if ( !findCheese ) {
//     throw new Error(`El id no existe ${ id }`);
//   }
// };