import Usuario from "./../models/Usuario.js";
import bcryptjs from 'bcryptjs';

//17. getUsers
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
  
  //Verificar si el correo ya existe (duplicado)
  const existeEmail = await Usuario.findOne({Email});
  if (existeEmail) {
    return res.status(400).json({msg: "El email ya esta registrado"});
  };
  // Encriptar nuestra contraseña
  usuario.password = await Usuario.encryptPassword(Password);
  
  // Guardar en MONGODB
  await usuario.save();
  res.json({
      "message":"El Usuario fue guardado Satisfactoriamente",
      usuario
  });
};

export const deleteUsuarios = async (req, res) => {
  //19.  extraigo y respondo id pasado como parametro desde postman
  const {id} = req.params

  //20. borrado fisico en DB
 /*  const usuario = await Usuario.findByIdAndDelete(id); */

  //21.  borrado virtual.  solo se cambia el estado a false del usuario asociado al id en cuestion
  const usuario = await Usuario.findByIdAndUpdate( id, { Estado: false 
  });
  res.status(204).json(usuario)
};

export const updateUsuarios = async (req, res) => {
  /* 1- http put ini*/
  const { id } = req.params;
  //Extraigo lo que NO necesito que se registre en MONGODB
  // incluyendo el object _id de mongodb
  const { _id, Password, GoogleSignIn, ...resto } = req.body;

  if ( Password ) {
    // Encriptar la contraseña
    resto.Password = await Usuario.encryptPassword( Password);
  }
  //Busca documento por el id y actualiza lo deseado(resto) de la coleccion.
  const usuario = await Usuario.findByIdAndUpdate( id, resto );

  res.status(200).json({
      msg:"Usuario Actualizado",
      usuario : usuario
  });
   /* 1- http put fin */
};
