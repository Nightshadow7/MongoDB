import Mes from './../models/Mes.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getMeses = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, meses ] = await Promise.all([
      Mes.countDocuments(query),
      Mes.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      meses
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneMes = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneMes = await Mes.findById( id )
    res.json(oneMes);
  } catch (err) {
    httpError(res, err);
  };
};
export const postMes = async( req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const numeroDB = await Mes.findOne({ Numero: body.Numero });
    const mesDB = await Mes.findOne({ Nombre: body.Nombre });
    if ( numeroDB && mesDB ) {
      return res.status(400).json({
        msg: `El Mes ingresado, ya se encuentra registrado`
      });
    };
    if ( numeroDB ) {
      return res.status(400).json({
        msg: `El Numero ${ numeroDB.Numero }, no puede tener mas de un Nombre Asociado`
      });
    };
    if ( mesDB ) {
      return res.status(400).json({
        msg: `El Mes de ${ mesDB.Nombre }, no puede tener mas de un Numero Asociado`
      });
    };
    const data = {
      ...body,
    };
    const mes = new Mes( data );
    await mes.save();
    res.status(201).json(mes);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteMes = async (req , res = response) => {
  try {
    const { id } = req.params
    const MesEliminado = await Mes.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Mes "${ MesEliminado.Nombre }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateMes = async (req, res = response) => {
  try {
    const updatedMes = await Mes.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedMes });
  } catch (err) {
    httpError(res, err);
  };
};
