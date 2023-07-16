import Etapa from "./../models/Etapas.js";

const obtenerEtapas = async (req, res) => {
  const etapas = await Etapa.find();
  res.json(etapas);
};

const oneEtapas = async (req,res) => {
  try {
    const etapas = await Etapa.findOne({_id:req.params.id});
    res.status(200).json(etapas);
  } catch (error) {
    res.status(404).send({error: "La Etapa no existe"})
  }
};

const agregarEtapas = async (req, res) => {
  const etapa = new Etapa(req.body);
  try {
    const nuevoEtapa = await etapa.save();
    res.json(nuevoEtapa);
  } catch (error) {
    console.log(error);
  }
};

const borrarEtapas = async (req, res) => {
  try {
    await Etapa.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"La Etapa no existe"});
  }
};

const actualizarEtapas = async (req, res) => {
  try {
  const etapa = await Etapa.findOne({_id:req.params.id});
  if (req.body.Numero){
    etapa.Numero = req.body.Numero;
  };
  if (req.body.Fecha){
    etapa.Fecha = req.body.Fecha;
  };
  if (req.body.Salida){
    ciclista.Salida = req.body.Salida;
  };
  if (req.body.Llegada){
    ciclista.Llegada = req.body.Llegada;
  };
  await etapa.save()
  res.status(200).send(etapa)
} catch (error) {
  res.status(404).send({error: "La Etapa No existe"});
}
};

export { obtenerEtapas , oneEtapas, agregarEtapas, borrarEtapas , actualizarEtapas };
