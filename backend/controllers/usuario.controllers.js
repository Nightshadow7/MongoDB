import Usuario from "./../models/Usuario.js";
import bcryptjs from 'bcryptjs';

export const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
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
  const {Nombre, Email, Password , Rol } = req.body;
  const usuario = new Usuario({Nombre, Email, Password , Rol});

  //Verificar si el correo ya existe (duplicado)
  const existeEmail = await Usuario.findOne({Email});
  if (existeEmail) {
    return res.status(400).json({msg: "El email ya esta registrado"});
  }

  //Encriptar nuestra contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.Password = bcryptjs.hashSync(Password , salt);

  await usuario.save();
  res.json({
    "message " : "post api",
    Nombre, 
    Email, 
    Password , 
    Rol
  }); 
};

export const deleteUsuarios = async (req, res) => {
  try {
    await Usuario.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Usuario no existe"});
  }
};

export const updateUsuarios = async (req, res) => {
  try {
  const usuario = await Usuario.findOne({_id:req.params.id});
  if (req.body.Nombre){
    usuario.Nombre = req.body.Nombre;
  };
  if (req.body.Nacionalidad){
    usuario.Nacionalidad = req.body.Nacionalidad;
  };
  if (req.body.Numero){
    usuario.Numero = req.body.Numero;
  };
  if (req.body.Color_Camisa){
    usuario.Color_Camisa = req.body.Color_Camisa;
  };
  await usuario.save()
  res.status(200).send(usuario)
} catch (error) {
  res.status(404).send({error: "El Usuario No existe"});
}
};
