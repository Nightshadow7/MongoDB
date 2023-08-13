import Rol from './../models/Rol.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getRol = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, rols ] = await Promise.all([
      Rol.countDocuments(query),
      Rol.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      rols
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneRol = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneRol = await Rol.findById( id )
    res.json(oneRol);
  } catch (err) {
    httpError(res, err);
  };
};
export const postRol = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const rolDB = await Rol.findOne({ Rol: body.Rol });
    if ( rolDB ) {
      return res.status(400).json({
        msg: `El Rol ${ rolDB.Rol }, ya existe`
      });
    };
    const data = {
      ...body,
      // Nombre: body.Nombre,
    };
    const rol = new Rol( data );
    await rol.save();
    res.status(201).json(rol);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteRol = async (req, res = response) => {
  try {
    const { id } = req.params
    const rolEliminado = await Rol.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Rol "${ rolEliminado.Rol }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateRol = async (req, res = response) => {
  try {
    const updatedRol = await Rol.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedRol });
  } catch (err) {
    httpError(res, err);
  };
};
