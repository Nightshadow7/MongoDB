import Entrevista from "../models/Entrevista.js";
import Usuario from "../models/Usuario.js";
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getEntrevistas = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, entrevistas ] = await Promise.all([
      Entrevista.countDocuments(query),
      Entrevista.find(query)
        .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
        .populate('Psicologa', 'Nombre')
        .populate('Grupo' , '-Estado')
        .populate('Convivencia' , 'Nombre')
        .populate('Parentezco' , 'Parentezco')
        .populate('MesCumpleaños' , ['Numero' , 'Nombre'])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      entrevistas
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneEntrevista = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneEntrevista = await Entrevista.findById( id )
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
      .populate('Psicologa', 'Nombre')
      .populate('Grupo' , '-Estado')
      .populate('Convivencia' , 'Nombre')
      .populate('Parentezco' , 'Parentezco')
      .populate('MesCumpleaños' , ['Numero' , 'Nombre'])
    res.json(oneEntrevista);
  } catch (err) {
    httpError(res , err);
  };
};
export const postEntrevista = async(req , res = response ) => {
  try {
    const { Estado , ...body } = req.body;
    const entrevistaDB = await Entrevista.findOne({ Usuario: body.Usuario });
    const psicologaDB = await Entrevista.findOne({ Psicologa: body.Psycologa});
    const {psycologist} = psicologaDB;
    const user = await Usuario.findOne({_id : psycologist});
    if ( entrevistaDB ) {
      return res.status(400).json({
        msg: `El Usuario ingresado, ya posee entrevista`
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
    const entrevista = new Entrevista( data );
    await entrevista.save();
    res.status(201).json(entrevista);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteEntrevista = async (req, res = response) => {
  try {
    const { id } = req.params
    const entrevistaEliminada = await Entrevista.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    const {Nombre} = entrevistaEliminada;
    const user = await Usuario.findOne({ _id: Nombre});
    res.status(200).json({
      msg: `El Usuario ${ user.Nombre } con ${ user.Documento } Asociado, fue eliminada su entrevista satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateEntrevista = async (req, res = response) => {
  try {
    const updatedEntrevista = await Entrevista.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedEntrevista });
  } catch (err) {
    httpError(res, err);
  };
};
