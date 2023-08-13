import Modulo from './../models/Modulo.js';
import { httpError } from "./../helpers/handleError.js";
import { response } from 'express';

export const getModulos = async ( req , res = response ) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, modulos ] = await Promise.all([
      Modulo.countDocuments(query),
      Modulo.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      modulos
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneModulo = async ( req , res = response ) => {
  try {
    const { id } = req.params;
    const oneModulo = await Modulo.findById( id )
    res.json(oneModulo);
  } catch (err) {
    httpError(res, err);
  };
};
export const postModulo = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const moduloDB = await Modulo.findOne({ Nombre: body.Nombre });
    if ( moduloDB ) {
      return res.status(400).json({
        msg: `El Modulo ${ moduloDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const modulo = new Modulo( data );
    await modulo.save();
    res.status(201).json( modulo );
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteModulo = async ( req , res = response ) => {
  try {
    const { id } = req.params
    const moduloEliminado = await Modulo.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Modulo "${ moduloEliminado.Nombre }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateModulo = async ( req , res = response ) => {
  try {
    const updatedModulo = await Modulo.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedModulo });
  } catch (err) {
    httpError(res, err);
  };
};