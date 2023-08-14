import Cumpleaño from './../models/Cumpleaño.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getCumpleaños = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, cumpleaños ] = await Promise.all([
      Cumpleaño.countDocuments(query),
      Cumpleaño.find(query)
        .populate('Mes' , ['Numero' , 'Nombre'])
        .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      cumpleaños
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneCumpleaño = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneCumpleaño = await Cumpleaño.findById( id )
      .populate('Mes' , ['Numero' , 'Nombre'])
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    res.json(oneCumpleaño);
  } catch (err) {
    httpError(res, err);
  };
};
export const postCumpleaño = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const cumpleañoDB = await Cumpleaño.findOne({ Usuario: body.Usuario });
    if ( cumpleañoDB ) {
      return res.status(400).json({
        msg: `El Usuario ${ cumpleañoDB.Usuario.Nombre } con ${ cumpleañoDB.Usuario.Documento }, ya se encuentra registrado`
      });
    };
    const data = {
      ...body
    };
    const cumpleaño = new Cumpleaño( data );
    await cumpleaño.save();
    res.status(201).json(cumpleaño);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteCumpleaño = async (req , res = response) => {
  try {
    const { id } = req.params
    const cumpleañoEliminado = await Cumpleaño.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Usuario ${ cumpleañoEliminado.Usuario.Nombre } con ${ cumpleañoEliminado.Usuario.Documento } Asociado, fue eliminado de los cumpleaños satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateCumpleaño = async (req, res = response) => {
  try {
    const updatedCumpleaño = await Cumpleaño.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedCumpleaño });
  } catch (err) {
    httpError(res, err);
  };
};
