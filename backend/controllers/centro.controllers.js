import { response } from 'express';
import Centro from '../models/Centro.js';  
import { httpError } from "../helpers/handleError.js";

export const getCentro = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, centro ] = await Promise.all([
      Centro.countDocuments(query),
      Centro.find(query)
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      centro
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCentro = async (req, res = response) => {
    try {
      const { id } = req.params;
      const oneCentro = await Centro.findById( id )
      res.json(oneCentro);
    } catch (err) {
        httpError(res, err);
    }
}

export const postCentro = async(req, res = response ) => {
  try {
    const { Estado, ...body } = req.body;
    const centroDB = await Centro.findOne({ Nombre: body.Nombre });
    if ( centroDB ) {
      return res.status(400).json({
        msg: `El Centro ${ centroDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
      Nombre: body.Nombre.toUpperCase()
    };
    const centro = new Centro( data );
    await centro.save();
    res.status(201).json(centro);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteCentros = async (req, res = response) => {
  try {
    const {id} = req.params
    const centro = await Centro.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(centro)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateCentro = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, ...data } = req.body;
    if( data.Nombre ) {
      data.Nombre  = data.Nombre.toUpperCase();
    }
    const centro = await Centro.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: centro} );
  } catch (err) {
    httpError(res, err);
  }
}