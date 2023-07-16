import Resultado from "./../models/Resultados.js";

const obtenerResultados = async (req, res) => {
  const resultados = await Resultado.find();
  res.json(resultados);
};

const oneResultados = async (req,res) => {
  try {
    const resultados = await Resultado.findOne({_id:req.params.id});
    res.status(200).json(resultados);
  } catch (error) {
    res.status(404).send({error: "El Resultado no existe"})
  }
};

const agregarResultados = async (req, res) => {
  const resultado = new Resultado(req.body);
  try {
    const nuevoResultado = await resultado.save();
    res.json(nuevoResultado);
  } catch (error) {
    console.log(error);
  }
};

const borrarResultados = async (req, res) => {
  try {
    await Resultado.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Resultado no existe"});
  }
};

const actualizarResultados = async (req, res) => {
  try {
  const resultado = await Resultado.findOne({_id:req.params.id});
  if (req.body.Etapa){
    resultado.Etapa = req.body.Etapa;
  };
  if (req.body.Ciclista){
    resultado.Ciclista = req.body.Ciclista;
  };
  if (req.body.Equipo){
    resultado.Equipo = req.body.Equipo;
  };
  if (req.body.Tiempo){
    resultado.Tiempo = req.body.Tiempo;
  };
  await resultado.save()
  res.status(200).send(resultado)
} catch (error) {
  res.status(404).send({error: "El Resultado No existe"});
}
};

export { obtenerResultados , oneResultados, agregarResultados, borrarResultados , actualizarResultados };
