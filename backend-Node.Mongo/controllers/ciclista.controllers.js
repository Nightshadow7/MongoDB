import Ciclista from "./../models/Ciclistas.js";

const obtenerCiclistas = async (req, res) => {
  const ciclistas = await Ciclista.find();
  res.json(ciclistas);
};

const oneCiclistas = async (req,res) => {
  try {
    const ciclistas = await Ciclista.findOne({_id:req.params.id});
    res.status(200).json(ciclistas);
  } catch (error) {
    res.status(404).send({error: "El ciclista no existe"})
  }
};

const agregarCiclistas = async (req, res) => {
  const ciclista = new Ciclista(req.body);
  try {
    const nuevoCiclista = await ciclista.save();
    res.json(nuevoCiclista);
  } catch (error) {
    console.log(error);
  }
};

const borrarCiclistas = async (req, res) => {
  try {
    await Ciclista.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Ciclista no existe"});
  }
};

const actualizarCiclistas = async (req, res) => {
  try {
  const ciclista = await Ciclista.findOne({_id:req.params.id});
  if (req.body.Nombre){
    ciclista.Nombre = req.body.Nombre;
  };
  if (req.body.Nacionalidad){
    ciclista.Nacionalidad = req.body.Nacionalidad;
  };
  if (req.body.Numero){
    ciclista.Numero = req.body.Numero;
  };
  if (req.body.Color_Camisa){
    ciclista.Color_Camisa = req.body.Color_Camisa;
  };
  await ciclista.save()
  res.status(200).send(ciclista)
} catch (error) {
  res.status(404).send({error: "El ciclista No existe"});
}
};

export { obtenerCiclistas , oneCiclistas, agregarCiclistas, borrarCiclistas , actualizarCiclistas };
