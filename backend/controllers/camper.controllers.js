import { response } from 'express';
import Camper from '../models/Camper.js';  
import { httpError } from "../helpers/handleError.js";

export const getCamper = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, campers ] = await Promise.all([
      Camper.countDocuments(query),
      Camper.find(query)
        .populate('level' , 'Nombre')
        .populate('rol' , 'Rol')
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      campers
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCamper = async (req, res = response) => {
    try {
      const { id } = req.params;
      const oneCamper = await Camper.findById( id )
        .populate('level', 'Nombre ')
        .populate('rol', 'Rol')
      res.json(oneCamper);
    } catch (err) {
        httpError(res, err);
    }
}

export const postCamper = async(req, res = response ) => {
  try {
    const { Estado, ...body } = req.body;
    const camperDB = await Camper.findOne({ NroIdentificacion: body.NroIdentificacion });
    if ( camperDB ) {
      return res.status(400).json({
        msg: `El Camper ${ camperDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
      Nombre: body.Nombre.toUpperCase(),
    };
    const camper = new Camper( data );
    await camper.save();
    res.status(201).json(camper);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteCampers = async (req, res = response) => {
  try {
    const {id} = req.params
    const camper = await Camper.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(camper)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateCamper = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, ...data } = req.body;
    if( data.Nombre ) {
      data.Nombre  = data.Nombre.toUpperCase();
    }
    const camper = await Camper.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: camper} );
  } catch (err) {
    httpError(res, err);
  }
}