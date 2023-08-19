import Camper from "../models/Camper.js";
import Usuario from "../models/Usuario.js";
import { response } from 'express';
import { httpError} from '../helpers/handleError.js'

export const getCampers = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, campers ] = await Promise.all([
      Camper.countDocuments(query),
      Camper.find(query)
        .populate('Psicologa', 'Nombre')
        .populate('Grupo' , ['NombreGrupo' , 'Abreviacion' , 'NombreTrainer'])
        .populate('Parentezco' , 'Parentezco')
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      campers
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneCamper = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneCamper = await Camper.findById( id )
      .populate('Psicologa', 'Nombre')
      .populate('Grupo' , ['NombreGrupo' , 'Abreviacion' , 'NombreTrainer'])
      .populate('Parentezco' , 'Parentezco')
    res.json(oneCamper);
  } catch (err) {
    httpError(res , err);
  };
};
export const postCamper = async(req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const camperDB = await Camper.findOne({ Documento: body.Documento });
    if ( camperDB ) {
      return res.status(400).json({
        msg: `El Documento ${camperDB.Documento} ingresado, ya esta registrada para el Camper ${camperDB.Documento}`
      });
    };
    const data = {
      ...body
    };
    const camper = new Camper( data );
    await camper.save();
    res.status(201).json(camper);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteCamper = async (req, res = response) => {
  try {
    const { id } = req.params
    const camperEliminado = await Camper.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Camper ${ camperEliminado.Nombre } con ${ camperEliminado.Documento } Asociado, fue eliminado su perfil satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateCamper = async (req, res = response) => {
  try {
    const updatedCamper = await Camper.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedCamper });
  } catch (err) {
    httpError(res, err);
  };
};
