import { httpError } from "./../helpers/handleError.js";
import Usuario from "./../models/Usuario.js";
import jwt from 'jsonwebtoken';

export const getUsuarios = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const query = { Estado: true };
  
    const [ total, usuarios ] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      usuarios
    });
  } catch (error) {
    httpError(res , error)
  };
};


export const getUsuario = (req, res) => {

};

export const createUsuarios = async (req, res) => {
  try {
    const {
      Nombre ,
      Sexo ,
      Imagen ,
      Telefono ,
      Edad ,
      FechaNacimiento ,
      Documento ,
      Psicologa ,
      Email ,
      Password ,
      Fecha ,
      Hora ,
      Grupo ,
      LugarResidencia ,
      LugarProcedencia ,
      Hijos ,
      TotalFamiliares	,
      Convivencia ,
      Famiiliares	,
      AreaPersonal ,
      AreaSomatica ,
      AreaFamiliar ,
      AreaEconomica ,
      AreaAfectiva ,
      AreaEducativa ,
      AreaSocial ,
      MetasCortoPLazo ,
      MetasMedianoPlazo ,
      MetasLargoPlazo ,
      HabilidadesSer ,
      HabilidadesHacer ,
      Ajustes ,
      Pasado ,
      Presente ,
      Futuro ,
      SeguimientoPsicologico ,
      PerfilPsicologico ,
      Activo,
      Asistencia ,
      Notas	,
      MesCumpleaños
    } = req.body;
    const newUsuario = await new Usuario({
      Nombre ,
      Sexo ,
      Imagen ,
      Telefono ,
      Edad ,
      FechaNacimiento ,
      Documento ,
      Psicologa ,
      Email ,
      Password :  Usuario.encryptPassword(Password),
      Fecha ,
      Hora ,
      Grupo ,
      LugarResidencia ,
      LugarProcedencia ,
      Hijos ,
      TotalFamiliares	,
      Convivencia ,
      Famiiliares	,
      AreaPersonal ,
      AreaSomatica ,
      AreaFamiliar ,
      AreaEconomica ,
      AreaAfectiva ,
      AreaEducativa ,
      AreaSocial ,
      MetasCortoPLazo ,
      MetasMedianoPlazo ,
      MetasLargoPlazo ,
      HabilidadesSer ,
      HabilidadesHacer ,
      Ajustes ,
      Pasado ,
      Presente ,
      Futuro ,
      SeguimientoPsicologico ,
      PerfilPsicologico ,
      Activo,
      Asistencia ,
      Notas	,
      MesCumpleaños
    });
    const token = jwt.sign({id: newUsuario._id}, process.env.PRIVATE_KEY, {expiresIn: 3600});
    //Correo
    const existeEmail = await Usuario.findOne({Email});
    if (existeEmail) {
      return res.status(400).json({msg: "El email ya esta registrado"});
    };
    // Guardar en MONGODB
    await newUsuario.save();
    res.json({
      "message":"El Usuario fue guardado Satisfactoriamente",
      newUsuario,
      token
  });
  } catch (error) {
    httpError(res, error);
  };
};

export const deleteUsuarios = async (req, res) => {
  try {
    //por ahora no se como manejar el delete, si on false en boolean o borrado literal
    //Cambio de Estado

    // const { id } = req.params
    // const usuarioStat = await Usuario.findByIdAndUpdate( id, { Activo: false });
    // res.status(204).json(usuarioStat)

    //borrado fisico en DB
    await Usuario.deleteOne({_id:req.params.id});
    res.json({msg:'Dato eliminado Satisfactoraimente'});
  } catch (err) {
      httpError(res, err);
  };
};

export const updateUsuarios = async (req, res) => { 
  try {
    const updatedUsuario = await Usuario.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}
    );
    res.json({updatedUsuario});
  } catch (err) {
      httpError(res, err);
  }
};