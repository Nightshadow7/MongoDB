import Convivencia from "../models/Convivencia.js";
import { httpError } from "./../helpers/handleError.js";
import { response } from 'express';

export const getConvivencias = async ( req , res = response ) => {
  try {
    const { hasta = 12, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, convivencias ] = await Promise.all([
      Convivencia.countDocuments(query),
      Convivencia.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      convivencias
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneConvivencia = async ( req , res = response ) => {
  try {
    const { id } = req.params;
    const oneConvivencia = await Convivencia.findById( id )
    res.json(oneConvivencia);
  } catch (err) {
    httpError(res, err);
  };
};
export const postConvivencia = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const convivenciaDB = await Convivencia.findOne({ Nombre: body.Nombre });
    if ( convivenciaDB ) {
      return res.status(400).json({
        msg: `La Convivencia ${ convivenciaDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const convivencia = new Convivencia( data );
    await convivencia.save();
    res.status(201).json( convivencia );
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteConvivencia = async ( req , res = response ) => {
  try {
    const { id } = req.params
    const convivenciaEliminada = await Convivencia.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `La convivencia "${ convivenciaEliminada.Nombre }", fue eliminada satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateConvivencia= async ( req , res = response ) => {
  try {
    const updatedConvivencia = await Convivencia.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedConvivencia });
  } catch (err) {
    httpError(res, err);
  };
};