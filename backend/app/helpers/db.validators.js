import Rols from './../models/Rol.js';
import Usuario from './../models/Usuario.js';
import Administrador from './../models/Administrador.js'
import Asistencia from './../models/Asistencia.js'
import Camper from './../models/Camper.js'
import Cronograma from './../models/Cronograma.js'
import Cumpleaño from './../models/Cumpleaño.js'
import Grupo from './../models/Grupo.js'
import Mes from './../models/Mes.js'
import Modulo from './../models/Modulo.js'
import Nota from './../models/Nota.js'
import Parentezco from './../models/Parentezco.js'
import Sexo from './../models/Sexo.js'
import Tema from './../models/Tema.js'


export const isValidRole = async(Rol = '')=>{
  const existeRol = await Rols.findOne({Rol});
  if(existeRol){
    throw new Error(`El rol ${Rol} no esta registrado en la base de datos`);
  };
};
export const emailExisteUser = async( Email = '' ) => {
  const existeUserEmail = await Usuario.findOne({Email});
  if(existeUserEmail){
    throw new Error(`El email: ${ Email }, ya está registrado`);
  };
};
export const emailExisteAdmin = async( Email = '' ) => {
  const existeAdminEmail = await Administrador.findOne({Email});
  if(existeAdminEmail){
    throw new Error(`El email: ${ Email }, ya está registrado`);
  };
};
export const userExistsById = async( id ) => {
  const userExists = await Usuario.findById(id);
  if ( !userExists ) {
    throw new Error(`El id del usuario no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const asistenciaExistsById = async( id ) => {
  const asistenciaExists = await Asistencia.findById(id);
  if ( !asistenciaExists ) {
    throw new Error(`El id de la asitencia no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};
export const adminExistsById = async( id ) => {
  const adminExists = await Administrador.findById(id);
  if ( !adminExists ) {
    throw new Error(`El id del Administrador no existe ${ id }`);
  };
};



// export const sexExistById = async ( id ) => {
//   const findSex = await Sexo.findById( id);
//   if (!findSex){
//     throw new Error(`El id del Sexo: ${ id } no esta registrado`)
//   };
// };

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