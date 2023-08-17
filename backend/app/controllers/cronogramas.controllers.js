import Cronograma from '../models/Cronograma.js';
import Usuario from '../models/Usuario.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getCronogramas = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, cronogramas ] = await Promise.all([
      Cronograma.countDocuments(query),
      Cronograma.find(query)
        .populate('Estudiante', ['Nombre' , 'Documento' , 'Edad' , 'Grupo' , 'Especialidades' , 'Sexo' ])
        .populate('Psicologa' , ['Nombre'])
        .populate('Mes' , ['Numero' , 'Nombre'])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      cronogramas
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneCronograma = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneCronograma = await Cronograma.findById( id )
      .populate('Estudiante', ['Nombre' , 'Documento' , 'Edad' , 'Grupo' , 'Especialidades' , 'Sexo' ])
      .populate('Psicologa' , ['Nombre'])
      .populate('Mes' , ['Numero' , 'Nombre'])
    res.json(oneCronograma);
  } catch (err) {
    httpError(res, err);
  };
};
export const postCronograma = async(req, res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const cronogramaDB = await Cronograma.findOne({ Estudiante: body.Estudiante });
    const psicologaDB = await Cronograma.findOne({ Psicologa: body.Psycologa});
    const {psycologist} = psicologaDB;
    const user = await Usuario.findOne({_id : psycologist});
    if ( cronogramaDB ) {
      const users = Usuario.findOne({ _id: cronogramaDB});
      return res.status(400).json({
        msg: `El Registro para el cronograma de ${ users.Nombre }, ya existe`
      });
    };
    if (user.Rol !== "Psicologa"){
      return res.status(400).json({
        msg: `EL dato ingresado para la Psicologa no es correcto`
      });
    };
    const data = {
      ...body
    };
    const cronograma = new Cronograma( data );
    await cronograma.save();
    res.status(201).json(cronograma);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteCronograma = async (req, res = response) => {
  try {
    const { id } = req.params
    const cronogramaEliminado = await Cronograma.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    const {Nombre} = cronogramaEliminado;
    const user = await Usuario.findOne({ _id: Nombre});
    res.status(200).json({
      msg: `El Cronograma para ${ user.Nombre }, fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateCronograma = async (req, res = response) => {
  try {
    const updatedCronograma = await Cronograma.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true } );
    res.json({status: 'OK', cronograma : updatedCronograma});
  } catch (err) {
    httpError(res, err);
  };
};