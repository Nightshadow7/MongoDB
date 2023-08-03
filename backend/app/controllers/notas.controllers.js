import Nota from './../models/Nota.js';
import { httpError } from "./../helpers/handleError.js";

export const getNotas = async (req, res) => {
  try {
    const allNotas = await Nota.find();
    res.json(allNotas);
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneNota = async (req, res) => {
  try {
    const oneNota = await Nota.findOne({_id:req.params.id});
    res.json(oneNota);
  } catch (err) {
    httpError(res, err);
  }
}

export const createNotas = async (req, res) => {
  try {
    const {Nota , Tema , Modulo , Observaciones} = req.body;
    const newNota = await Nota({Nota , Tema , Modulo , Observaciones});
    newNota.save();
    res.json(newNota);
  } catch (err) {
    httpError(res, err);
  }
}

export const deleteNotas = async (req, res) => {
  try {
    await Nota.deleteOne({_id: req.params.id});
    res.json({status: 'OK', data: `Nota Eliminada con Exito`});
  } catch (err) {
    httpError(res, err);
  }
}

export const updateNota = async (req, res) => {
  try {
    const updatedNota = await Nota.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
    res.json({status: 'OK', data: updatedNota});
  } catch (err) {
    httpError(res, err);
  }
}