import { response } from 'express';
import Level from '../models/Ruta.js';  
import { httpError } from "../helpers/handleError.js";

export const getLevel = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, levels ] = await Promise.all([
      Level.countDocuments(query),
      Level.find(query)
        .populate('ruta' , 'Nombre')
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      levels
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneLevel = async (req, res = response) => {
    try {
      const { id } = req.params;
      const oneLevel = await Level.findById( id )
        .populate('ruta', 'Nombre')
      res.json(oneLevel);
    } catch (err) {
        httpError(res, err);
    }
}

export const postLevel = async(req, res = response ) => {
  try {
    const { Estado, Nombre , ...body } = req.body;
    const levelDB = await Level.findOne({ Nombre: body.Nombre });
    if ( levelDB ) {
      return res.status(400).json({
        msg: `El Level ${ levelDB.Nombre }, ya existe`
      });
    };
    const data = {
      Nombre: body.Nombre,
      ...body,
    };
    const level = new Level( data );
    await level.save();
    res.status(201).json(level);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteLevels = async (req, res = response) => {
  try {
    const {id} = req.params
    const level = await Level.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(level)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateLevel = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, ...data } = req.body;
    if( data.Nombre ) {
      data.Nombre  = data.Nombre.toUpperCase();
    }
    const level = await Level.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: level} );
  } catch (err) {
    httpError(res, err);
  }
}