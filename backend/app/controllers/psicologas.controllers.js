import {httpError} from "./../helpers/handleError.js";
import Psicologa from "./../models/Psicologas.js";
import jwt from 'jsonwebtoken';

export const getPsicologas = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const query = { Estado: true };
  
    const [ total, psicologas ] = await Promise.all([
      Psicologa.countDocuments(query),
      Psicologa.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      psicologas
    });
  } catch (error) {
    httpError(res , error)
  };
};

export const onePsicologas = async (req,res) => {
  try {
    const usuarios = await Psicologa.findOne({_id:req.params.id});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({msg: "El usuario no existe"})
  }
};

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
