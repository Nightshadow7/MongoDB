import { response } from 'express';
import Rol from '../models/Rol.js';  
import { httpError } from "../helpers/handleError.js";

export const getRol = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, rols ] = await Promise.all([
      Rol.countDocuments(query),
      Rol.find(query)
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      rols
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneRol = async (req, res = response) => {
    try {
      const { id } = req.params;
      const oneRol = await Rol.findById( id )
      res.json(oneRol);
    } catch (err) {
        httpError(res, err);
    }
}

export const postRol = async(req, res = response ) => {
  try {
    const { Estado, ...body } = req.body;
    const rolDB = await Rol.findOne({ Rol: body.Rol })
    if ( rolDB ) {
      return res.status(400).json({
        msg: `El Rol , ya existe`
      });
    };
    const data = {
      ...body,
      Rol: body.Rol.toUpperCase(),
    };
    const rol = new Rol( data );
    await rol.save();
    res.status(201).json(rol);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteRols = async (req, res = response) => {
  try {
    const {id} = req.params
    const rol = await Rol.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(rol)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateRol = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, ...data } = req.body;
    if( data.Rol ) {
      data.Rol  = data.Rol.toUpperCase();
    }
    const rol = await Rol.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: rol} );
  } catch (err) {
    httpError(res, err);
  }
}