import Asistencia from '../models/Asistencia.js';
import { response } from 'express';
import { httpError } from "./../helpers/handleError.js";

export const getAsistencias = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, asistencia ] = await Promise.all([
      Asistencia.countDocuments(query),
      Asistencia.find(query)
        .populate('Usuario', "-Password")
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      asistencia
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneAsistencia = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneAsistencia = await Asistencia.findById( id )
    .populate('Usuario', "-Password")
    res.json(oneAsistencia);
  } catch (err) {
    httpError(res, err);
  };
};
export const postAsistencia = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const data = {
      ...body,
      Nombre: body.Nombre,
      Usuario: req.usuario._id,
    };
    const asistencia = new Asistencia( data );
    await asistencia.save();
    res.status(201).json(asistencia);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteAsistencia = async (req, res = response) => {
  try {
    const { id } = req.params
    const asistenciaEliminada = await Asistencia.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(204).json({
      msg: `La Asistencia ${ asistenciaEliminada.Usuario }, fue eliminado satisfactoriamente`
    })
  } catch (err) {
      httpError(res, err);
  };
};
export const updateAsistencia = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado , Usuario , ...data } = req.body;
    data.Usuario = req.usuario._id;
    const updatedAsistencia = await Asistencia.findOneAndUpdate({ _id: id }, data , { new : true } );
    res.json({status: 'OK', asistencia : updatedAsistencia});
  } catch (err) {
    httpError(res, err);
  };
};