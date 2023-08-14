import Grupo from './../models/Grupo.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getGrupos = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, grupos ] = await Promise.all([
      Grupo.countDocuments(query),
      Grupo.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      grupos
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneGrupo = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneGrupo = await Grupo.findById( id )
    res.json(oneGrupo);
  } catch (err) {
    httpError(res, err);
  };
};
export const postGrupo = async(req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const grupoDB = await Grupo.findOne({ Abreviacion: body.Abreviacion });
    if ( grupoDB ) {
      return res.status(400).json({
        msg: `El Grupo ${ grupoDB.Abreviacion }, ya existe`
      });
    };
    const data = {
      ...body,
    };
    const grupo = new Grupo( data );
    await grupo.save();
    res.status(201).json(grupo);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteGrupo = async (req , res = response) => {
  try {
    const { id } = req.params
    const grupoEliminado = await Grupo.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Grupo "${ grupoEliminado.Abreviacion }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateGrupo = async (req, res = response) => {
  try {
    const updatedGrupo = await Grupo.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedGrupo });
  } catch (err) {
    httpError(res, err);
  };
};
