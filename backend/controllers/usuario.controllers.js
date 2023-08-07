import Usuario from "./../models/Usuario.js";
import bcryptjs from 'bcryptjs';

export const getUsuarios = async (req, res) => {
  const { hasta, desde } = req.query;
  const query = { Estado: true };
  const [ total, usuarios ] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query)
      .skip( Number( desde ) )
      .limit( Number( hasta ) )
  ]);
  res.json({
    total,
    usuarios
  });
};
export const oneUsuarios = async (req,res) => {
  try {
    const usuarios = await Usuario.findOne({_id:req.params.id});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({msg: "El usuario no existe"})
  }
};
export const postUsuarios = async (req, res) => {
  const {Nombre, Email, Password, Rol} = req.body;
  const usuario = new Usuario({Nombre, Email, Rol});
  const existeEmail = await Usuario.findOne({Email});
  if (existeEmail) {
    return res.status(400).json({msg: "El email ya esta registrado"});
  };
  usuario.password = await Usuario.encryptPassword(Password);
  await usuario.save();
  res.json({
      "message":"El Usuario fue guardado Satisfactoriamente",
      usuario
  });
};
export const deleteUsuarios = async (req, res) => {
  const {id} = req.params

  //20. borrado fisico en DB
 /*  const usuario = await Usuario.findByIdAndDelete(id); */
  const usuario = await Usuario.findByIdAndUpdate( id, { Estado: false 
  });
  res.status(204).json(usuario)
};
export const updateUsuarios = async (req, res) => {
  const { id } = req.params;
  const { _id, Password, GoogleSignIn, ...resto } = req.body;
  if ( Password ) {
    resto.Password = await Usuario.encryptPassword( Password);
  };
  const usuario = await Usuario.findByIdAndUpdate( id, resto );
  res.status(200).json({
      msg:"Usuario Actualizado",
      usuario : usuario
  });
};
