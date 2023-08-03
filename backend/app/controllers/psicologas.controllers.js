import httpError from "../helpers/handleError.js";
import Psicologa from "./../models/Psicologas.js";
import jwt from 'jsonwebtoken';


export const createPsicologas = async (req, res) => {
  try {
    const {
      Nombre ,
      Documento ,
      Edad ,
      Email ,
      Password ,
      Telefono ,
      Especialidades ,
      Estado
    } = req.body;
    const newPsicologa = await new Psicologa({
      Nombre ,
      Documento ,
      Edad ,
      Email ,
      Password ,
      Telefono ,
      Especialidades,
      Estado
    });
    const token = jwt.sign({id: newPsicologa._id}, process.env.PRIVATE_KEY, {expiresIn: 3600});
    //Correo
    const existeEmail = await Psicologa.findOne({Email});
    if (existeEmail) {
      return res.status(400).json({msg: "El email ya esta registrado"});
    };
    // Guardar en MONGODB
    await newPsicologa.save();
    res.json({
      "message":"La Nueva Psicologa fue guardada Satisfactoriamente",
      newPsicologa,
      token
  });
  } catch (error) {
    httpError(res, error);
  };
};
