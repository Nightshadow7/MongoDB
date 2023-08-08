import Sexo from './../models/Sexo.js';
import { httpError } from "./../helpers/handleError.js";

export const getSexos = async (req, res = response) => {
  try {
    const { hasta= 10 , desde = 0} = req.query;
    const query = { Estado : true};
    const [total , sexos ] = await Promise.all([
      Sexo.countDocuments(query),
      Sexo.find(query)
        .skip(Number(desde))
        .limit(Number(hasta))
    ]);
    return res.json({
      total,
      sexos
    });
  } catch (err) {
    httpError(res, err);
  }
};

export const getOneSexo = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneSexo = await Sexo.findById( id );
    res.json(oneSexo);
  } catch (err) {
    httpError(res, err);
  };
};

export const createSexos = async (req, res = response) => { 
  try {
    const {Tipo , ...body} = req.body;
    const sexoDB = await Sexo.findOne({ Tipo: body.Tipo});
    if (sexoDB){
      return res.status(400).json({
        msg: `El Sexo ${sexoDB.Tipo}, Ya se encuentra en la base de datos`
      });
    };
    const data = {
      ...body,
      Tipo: body.Tipo.toUpperCase()
    }
    const sexos = new Sexo( data);
    await sexos.save();
    res.status(201).json(sexos);
  } catch (err) {
    httpError(res, err);
  }
}

export const deleteSexos = async (req, res = response) => {
  try {
    const { id } = req.params;
    const sexos = await Sexo.findByIdAndUpdate( id , { Estado: false} ,  { New : true});
    res.status(204).json({status: 'OK', data: sexos , msg : `Sexo Eliminado con Exito`});
  } catch (err) {
    httpError(res, err);
  };
};

export const updateSexo = async (req, res = response ) => {
  try {
    const { id } = req.params;
    const { ...data} = req.body;
    if( data.Tipo){
      data.Tipo = data.Tipo.toUpperCase();
    };
    const updateSexo = await Sexo.findByIdAndUpdate(id,data, {new: true});
    res.json({status: 'OK', data: updateSexo , msg: `Sexo Actualizado con exito`});
  } catch (err) {
    httpError(res, err);
  }
}