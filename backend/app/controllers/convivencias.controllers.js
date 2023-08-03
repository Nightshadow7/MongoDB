import Convivencia from "../models/convivencia.js";
import { httpError } from "./../helpers/handleError.js";

export const getConvivencias = async (req, res) => {
  try {
    const allConvivencias = await Convivencia.find();
    res.json(allConvivencias);
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneConvivencia = async (req, res) => {
  try {
    const oneConvivencia = await Convivencia.findOne({_id:req.params.id});
    res.json(oneConvivencia);
  } catch (err) { 
    httpError(res, err);
  }
}

export const createConvivencias = async (req, res) => {
  try {
    const {Convivencia , Campo} = req.body;
    const newConvivencia = await Convivencia({Convivencia , Campo});
    newConvivencia.save();
    res.json(newConvivencia);
  } catch (err) {
    httpError(res, err); 
  }
}

export const deleteConvivencias = async (req, res) => {
  try {
    await Convivencia.deleteOne({_id: req.params.id});
    res.json({status: 'OK', data: `Convivencia Eliminada con Exito`});
  } catch (err) {
    httpError(res, err);
  }
}

export const updateConvivencia = async (req, res) => {
  try {
    const updatedConvivencia = await Convivencia.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
      res.json({status: 'OK', data: updateConvivencia});
  } catch (err) {
    httpError(res, err);
  }
}