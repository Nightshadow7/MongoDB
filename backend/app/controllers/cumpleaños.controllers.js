import Cumpleaño from './../models/Cumpleaño.js';
import { httpError } from "./../helpers/handleError.js";

export const getCumpleaños = async (req, res) => {
  try {
    const allCumpleaños = await Cumpleaño.find();
    res.json(allCumpleaños);
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCumpleaño = async (req, res) => {
  try {
    const oneCumpleaño = await Cumpleaño.findOne({_id:req.params.id});
    res.json(oneCumpleaño);
  } catch (err) {
    httpError(res, err);
  }
}

export const createCumpleaños = async (req, res) => {
  try {
    const {Mes , Nombre} = req.body;
    const newCumpleaño = await Cumpleaño({Mes , Nombre});
    newCumpleaño.save();
    res.json(newCumpleaño);
  } catch (err) {
    httpError(res, err);
  }
}

export const deleteCumpleaños = async (req, res) => {
  try {
    await Cumpleaño.deleteOne({_id: req.params.id});
    res.json({status: 'OK', data: `Cumpleaños Eliminado con Exito`});
  } catch (err) {
    httpError(res, err);
  }
}

export const updateCumpleaño = async (req, res) => {
  try {
    const updatedCumpleaño = await Cumpleaño.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
    res.json({status: 'OK', data: updatedCumpleaño});
  } catch (err) {
    httpError(res, err);
  }
}