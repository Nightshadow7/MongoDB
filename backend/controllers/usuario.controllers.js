import Usuario from "./../models/usuarios.js";

const obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

const oneUsuarios = async (req,res) => {
  try {
    const usuarios = await Usuario.findOne({_id:req.params.id});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).send({error: "El usuario no existe"})
  }
};

const agregarUsuarios = async (req, res) => {
  const body = req.body;
  const usuario = new Usuario(body);
  await usuario.save();
  res.json({
    "message " : "post api",
    usuario
  }); 
};

const borrarUsuarios = async (req, res) => {
  try {
    await Usuario.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Usuario no existe"});
  }
};

const actualizarUsuarios = async (req, res) => {
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

export { obtenerUsuarios , oneUsuarios, agregarUsuarios, borrarUsuarios , actualizarUsuarios };