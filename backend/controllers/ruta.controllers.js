import { response } from 'express';
import Ruta from '../models/Ruta.js';  
import { httpError } from "../helpers/handleError.js";

export const getRuta = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, rutas ] = await Promise.all([
      Ruta.countDocuments(query),
      Ruta.find(query)
        .populate('centro' , 'Nombre')
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      rutas
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneRuta = async (req, res = response) => {
    try {
      const { id } = req.params;
      const oneRuta = await Ruta.findById( id )
        .populate('centro', 'Nombre ')
      res.json(oneCentro);
    } catch (err) {
        httpError(res, err);
    }
}

export const postRuta = async(req, res = response ) => {
  try {
    const { Estado, Centro, ...body } = req.body;
    const rutaDB = await Ruta.findOne({ Nombre: body.Nombre });
    if ( rutaDB ) {
      return res.status(400).json({
        msg: `La Ruta ${ rutaDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
      Centro: req.centro._id,
    };
    const ruta = new Ruta( data );
    await ruta.save();
    res.status(201).json(ruta);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteRuta = async (req, res = response) => {
  try {
    const {id} = req.params
    const ruta = await Ruta.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(ruta)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateRuta = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, ...data } = req.body;
    if( data.Nombre ) {
      data.Nombre  = data.Nombre.toUpperCase();
    }
    const ruta = await Ruta.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: ruta} );
  } catch (err) {
    httpError(res, err);
  }
}