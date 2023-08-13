import Tema from './../models/Tema.js';
import { httpError } from "./../helpers/handleError.js";
import { response } from 'express';

export const getTemas = async ( req , res = response ) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, temas ] = await Promise.all([
      Tema.countDocuments(query),
      Tema.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      temas
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneTema = async ( req , res = response ) => {
  try {
    const { id } = req.params;
    const oneTema = await Tema.findById( id )
    res.json(oneTema);
  } catch (err) {
    httpError(res, err);
  };
};
export const postTema = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const temaDB = await Tema.findOne({ NombreTema: body.NombreTema });
    if ( temaDB ) {
      return res.status(400).json({
        msg: `El Tema ${ temaDB.NombreTema }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const tema = new Tema( data );
    await tema.save();
    res.status(201).json( tema );
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteTema = async ( req , res = response ) => {
  try {
    const { id } = req.params
    const temaEliminado = await Tema.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Tema "${ temaEliminado.NombreTema }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateTema = async ( req , res = response ) => {
  try {
    const updatedTema = await Tema.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedTema });
  } catch (err) {
    httpError(res, err);
  };
};