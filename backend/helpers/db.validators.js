import Rols from './../models/Rol.js';
import Usuario from './../models/Usuario.js';
import Categoria from './../models/Categoria.js';
import Cheese from './../models/Cheese.js';

export const isValidRole = async(rol= '')=>{
  const existeRol = await Rols.findOne({rol});
  if(!existeRol){
    throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
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
export const categoriaExistById = async( id ) => {
  const findCategory = await Categoria.findById(id);
  if ( !findCategory ) {
    throw new Error(`El id de categoria no existe ${ id }`);
  };
};
export const cheeseExistById = async( id ) => {
  const findCheese = await Cheese.findById(id);
  if ( !findCheese ) {
    throw new Error(`El id no existe ${ id }`);
  }
};