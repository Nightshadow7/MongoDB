import Parentezco from './../models/Parentezco.js';
import { httpError } from "./../helpers/handleError.js";
import { response } from 'express';

export const getParentezcos = async ( req , res = response ) => {
  try {
    const { hasta = 12, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, parentezcos ] = await Promise.all([
      Parentezco.countDocuments(query),
      Parentezco.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      parentezcos
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneParentezco = async ( req , res = response ) => {
  try {
    const { id } = req.params;
    const oneParentezco = await Parentezco.findById( id )
    res.json(oneParentezco);
  } catch (err) {
    httpError(res, err);
  };
};
export const postParentezco = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const parentezcoDB = await Parentezco.findOne({ Parentezco: body.Parentezco });
    if ( parentezcoDB ) {
      return res.status(400).json({
        msg: `El Rol ${ parentezcoDB.Parentezco }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const parentezco = new Parentezco( data );
    await parentezco.save();
    res.status(201).json( parentezco );
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteParentezco = async ( req , res = response ) => {
  try {
    const { id } = req.params
    const parentezcoEliminado = await Parentezco.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Parentezco "${ parentezcoEliminado.Parentezco }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateParentezco = async ( req , res = response ) => {
  try {
    const updatedParentezco = await Parentezco.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedParentezco });
  } catch (err) {
    httpError(res, err);
  };
};