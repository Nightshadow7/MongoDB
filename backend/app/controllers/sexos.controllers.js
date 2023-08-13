import Sexo from './../models/Sexo.js';
import { httpError } from "./../helpers/handleError.js";
import { response } from "express";

export const getSexos = async ( req , res = response ) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, sexos ] = await Promise.all([
      Sexo.countDocuments(query),
      Sexo.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      sexos
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneSexo = async ( req , res = response ) => {
  try {
    const { id } = req.params;
    const oneSexo = await Sexo.findById( id )
    res.json(oneSexo);
  } catch (err) {
    httpError(res, err);
  };
};
export const postSexo = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const sexoDB = await Sexo.findOne({ Tipo: body.Tipo });
    if ( sexoDB ) {
      return res.status(400).json({
        msg: `El Rol ${ sexoDB.Tipo }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const sexo = new Sexo( data );
    await sexo.save();
    res.status(201).json( sexo );
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteSexo = async ( req , res = response ) => {
  try {
    const { id } = req.params
    const sexoEliminado = await Sexo.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Sexo "${ sexoEliminado.Tipo }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateSexo = async ( req , res = response ) => {
  try {
    const updatedSexo = await Sexo.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedSexo });
  } catch (err) {
    httpError(res, err);
  };
};