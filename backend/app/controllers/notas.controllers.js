import Nota from './../models/Nota.js';
import Usuario from './../models/Usuario.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getNotas = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, notas ] = await Promise.all([
      Nota.countDocuments(query),
      Nota.find(query)
        .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
        .populate('Tema' , ['NombreTema' , 'Descripcion'])
        .populate('Modulo' , ['Nombre' , 'AlcanceEsperado'])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      notas
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneNota = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneNota = await Nota.findById( id )
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
      .populate('Tema' , ['NombreTema' , 'Descripcion'])
      .populate('Modulo' , ['Nombre' , 'AlcanceEsperado'])
    res.json(oneNota);
  } catch (err) {
    httpError(res, err);
  };
};
export const postNota = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const data = {
      ...body
    };
    const nota = new Nota( data );
    await nota.save();
    res.status(201).json(nota);
  } catch (err) {
    httpError(res , err);
  };
};
export const deleteNota = async (req, res = response) => {
  try {
    const { id } = req.params
    const notaEliminada = await Nota.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    const {Nombre} = notaEliminada;
    const user = await Usuario.findOne({ _id: Nombre});
    res.status(200).json({
      msg: `La nota de ${ user.Nombre } con ${ user.Documento } Asociado, fue eliminada satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateNota = async (req, res = response) => {
  try {
    const updatedNota = await Nota.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedNota });
  } catch (err) {
    httpError(res, err);
  };
};
