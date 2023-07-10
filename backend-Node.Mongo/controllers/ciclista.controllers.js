import Ciclista from "./../models/Ciclistas.js";

const obtenerCiclistas = async (req, res) => {
  const ciclistas = await Ciclista.find();

  res.json(ciclistas);
};

export { obtenerCiclistas};