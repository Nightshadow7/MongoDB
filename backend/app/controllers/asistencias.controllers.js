import Asistencia from '../models/Asistencia.js';
import User from '../models/Usuario.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getAsistencias = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, asistencias ] = await Promise.all([
      Asistencia.countDocuments(query),
      Asistencia.find(query)
        .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      asistencias
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneAsistencia = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneAsistencia = await Asistencia.findById( id )
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    res.json(oneAsistencia);
  } catch (err) {
    httpError(res, err);
  };
};
export const postAsistencia = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const data = {
      ...body
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
    const asistenciaEliminada = await Asistencia.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    const {Usuario} = asistenciaEliminada;
    const user = await User.findOne({ _id: Usuario});
    res.status(200).json({
      msg: `El Usuario ${ user.Nombre } con ${ user.Documento } Asociado, fue eliminada su Asistencia satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateAsistencia = async (req, res = response) => {
  try {
    const updatedAsistencia = await Asistencia.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedAsistencia });
  } catch (err) {
    httpError(res, err);
  };
};
