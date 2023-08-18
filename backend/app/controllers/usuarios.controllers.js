import Usuario from "../models/Usuario.js";
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getUsuarios = async (req , res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, usuarios ] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query)
        .populate('Sexo' , 'Tipo')
        .populate('Rol' , 'Rol')
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      usuarios
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneUsuario = async (req , res = response) => {
  try {
    const { id } = req.params;
    const oneUsuario = await Usuario.findById( id )
    .populate('Sexo' , 'Tipo')
    .populate('Rol' , 'Rol')
    res.json(oneUsuario);
  } catch (err) {
    httpError(res, err);
  };
};
export const postUsuario = async(req, res = response ) => {
  try {
    const { Estado , Password , ...body } = req.body;
    const documentoDB = await Usuario.findOne({ Documento: body.Documento });
    const emailDB = await Usuario.findOne({ Email: body.Email });
    if ( documentoDB && emailDB ) {
      return res.status(400).json({
        msg: `El Usuario ingresado, ya se encuentra registrado`
      });
    };
    if ( documentoDB ) {
      return res.status(400).json({
        msg: `El Documento ${ documentoDB.Documento }, ya se encuentra registrado`
      });
    };
    if ( emailDB ) {
      return res.status(400).json({
        msg: `El Correo electronico ingresado ${ emailDB.Email }, ya se encuentra Asociado a otro Usuario`
      });
    };
    const data = {
      ...body
    };
    data.Password = await Usuario.encryptPassword(Password);
    const usuario = new Usuario( data );
    await usuario.save();
    res.status(201).json(usuario);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteUsuario = async (req, res = response) => {
  try {
    const { id } = req.params
    const usuarioEliminado = await Usuario.findByIdAndUpdate( id , { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El Usuario ${ usuarioEliminado.Nombre } con ${ usuarioEliminado.Documento } Asociado, fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updateUsuario = async (req, res = response) => {
  try {
    const { Password , ...resto } = req.body;
    if ( Password ) {
      resto.Password = await Usuario.encryptPassword( Password );
    };
    const updatedUsuario = await Usuario.findOneAndUpdate({ _id : req.params.id } , resto , { new : true })
    res.json({ status: 'OK' , data : updatedUsuario });
  } catch (err) {
    httpError(res, err);
  };
};
