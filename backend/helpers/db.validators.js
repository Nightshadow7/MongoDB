import Rols from './../models/Rol.js';
import Centro from './../models/Centro.js';
import Level from './../models/Level.js';
import Ruta from './../models/Ruta.js';

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
export const centroExistsById = async( id ) => {
  const findCentro = await Centro.findById(id);
  if ( !findCentro ) {
    throw new Error(`El id del Centro no existe ${ id }`);
  };
};
export const levelExistById = async( id ) => {
  const findLevel = await Level.findById(id);
  if ( !findLevel ) {
    throw new Error(`El id del Level no existe ${ id }`);
  };
};
export const rutaExistById = async( id ) => {
  const findRuta = await Ruta.findById(id);
  if ( !findRuta ) {
    throw new Error(`El id no existe ${ id }`);
  }
};