import Clasificacion from "./../models/Clasificaciones.js";

const obtenerClasificaciones = async (req, res) => {
  const clasificaciones = await Clasificacion.find();
  res.json(clasificaciones);
};

const oneClasificaciones = async (req,res) => {
  try {
    const clasificaciones = await Clasificacion.findOne({_id:req.params.id});
    res.status(200).json(clasificaciones);
  } catch (error) {
    res.status(404).send({error: "La clasificacion buscada no existe"})
  }
};

const agregarClasificaciones = async (req, res) => {
  const clasificacion = new Clasificacion(req.body);
  try {
    const nuevoClasificacion = await clasificacion.save();
    res.json(nuevoClasificacion);
  } catch (error) {
    console.log(error);
  }
};

const borrarClasificaciones = async (req, res) => {
  try {
    await Clasificacion.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"La clasificacion especificada no existe"});
  }
};

const actualizarClasificaciones = async (req, res) => {
  try {
  const clasificacion = await Clasificacion.findOne({_id:req.params.id});
  if (req.body.Tipo){
    clasificacion.Tipo = req.body.Tipo;
  };
  if (req.body.Descripcion){
    clasificacion.Descripcion = req.body.Descripcion;
  };
  await clasificacion.save()
  res.status(200).send(clasificacion)
} catch (error) {
  res.status(404).send({error: "La clasificacion no existe"});
}
};

export { obtenerClasificaciones , oneClasificaciones, agregarClasificaciones, borrarClasificaciones , actualizarClasificaciones };
