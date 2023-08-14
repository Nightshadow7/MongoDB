import Administrador from './../models/Administrador.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getAdministradores = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, administradores ] = await Promise.all([
      Administrador.countDocuments(query),
      Administrador.find(query)
        .populate('Rol', 'Rol')
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      administradores
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneAdministrador = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneAdministrador = await Administrador.findById( id )
    .populate('Rol', 'Rol')
    res.json(oneAdministrador);
  } catch (err) {
    httpError(res, err);
  };
};
export const postAdministrador = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const administradorDB = await Administrador.findOne({ Nombre: body.Nombre });
    if ( administradorDB ) {
      return res.status(400).json({
        msg: `El Administrador ${ administradorDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body
    };
    const administrador = new Administrador( data );
    await administrador.save();
    res.status(201).json(administrador);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteAdministrador = async (req, res = response) => {
  try {
    const { id } = req.params
    const administradorEliminado = await Administrador.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Administrador ${ administradorEliminado.Nombre }, fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateAdministrador = async (req, res = response) => {
  try {
    const updatedAdministrador = await Administrador.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true } );
    res.json({status: 'OK', administrador : updatedAdministrador});
  } catch (err) {
    httpError(res, err);
  };
};