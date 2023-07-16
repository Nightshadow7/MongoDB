import Premio from "./../models/Premios.js";

const obtenerPremios = async (req, res) => {
  const premios = await Premio.find();
  res.json(premios);
};

const onePremios = async (req,res) => {
  try {
    const premios = await Premio.findOne({_id:req.params.id});
    res.status(200).json(premios);
  } catch (error) {
    res.status(404).send({error: "El Premio no existe"})
  }
};

const agregarPremios = async (req, res) => {
  const premio = new Premio(req.body);
  try {
    const nuevoPremio = await premio.save();
    res.json(nuevoPremio);
  } catch (error) {
    console.log(error);
  }
};

const borrarPremios = async (req, res) => {
  try {
    await Premio.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Premio no existe"});
  }
};

const actualizarPremios = async (req, res) => {
  try {
  const premio = await Premio.findOne({_id:req.params.id});
  if (req.body.Tipo){
    premio.Tipo = req.body.Tipo;
  };
  if (req.body.Descripcion){
    premio.Descripcion = req.body.Descripcion;
  };
  await premio.save()
  res.status(200).send(premio)
} catch (error) {
  res.status(404).send({error: "El Premio No existe"});
}
};

export { obtenerPremios , onePremios, agregarPremios, borrarPremios , actualizarPremios };
