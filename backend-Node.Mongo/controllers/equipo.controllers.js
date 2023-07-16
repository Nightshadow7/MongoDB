import Equipo from "./../models/Equipos.js";

const obtenerEquipos = async (req, res) => {
  const equipos = await Equipo.find();
  res.json(equipos);
};

const oneEquipos = async (req,res) => {
  try {
    const equipos = await Equipo.findOne({_id:req.params.id});
    res.status(200).json(equipos);
  } catch (error) {
    res.status(404).send({error: "El Equipo buscado no existe"})
  }
};

const agregarEquipos = async (req, res) => {
  const equipo = new Equipo(req.body);
  try {
    const nuevoEquipo = await equipo.save();
    res.json(nuevoEquipo);
  } catch (error) {
    console.log(error);
  }
};

const borrarEquipos = async (req, res) => {
  try {
    await Equipo.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Equipo buscado no existe"});
  }
};

const actualizarEquipos = async (req, res) => {
  try {
  const equipo = await Equipo.findOne({_id:req.params.id});
  if (req.body.Nombre){
    equipo.Nombre = req.body.Nombre;
  };
  if (req.body.Patrocinador){
    equipo.Patrocinador = req.body.Patrocinador;
  };
  await equipo.save()
  res.status(200).send(equipo)
} catch (error) {
  res.status(404).send({error: "El Equipo buscado No existe"});
}
};

export { obtenerEquipos , oneEquipos, agregarEquipos, borrarEquipos , actualizarEquipos };
