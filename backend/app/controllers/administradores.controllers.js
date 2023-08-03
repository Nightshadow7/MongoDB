import Administrador from './../models/Administrador.js';
import { httpError } from "./../helpers/handleError.js";

export const getAdministradores = async (req, res) => {
  try {
    const allAdministradores = await Administrador.find();
    res.json(allAdministradores);
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneAdministrador = async (req, res) => {
  try {
    const oneAdministrador = await Administrador.findOne({_id:req.params.id});
    res.json(oneAdministrador);
  } catch (err) {
    httpError(res, err);
  }
}

export const createAdministradores = async (req, res) => {
  try {
    const {Nombre , Email , Password , Rol} = req.body;
    const newAdministrador = await Administrador({Nombre , Email , Password , Rol});
    newAdministrador.save();
    res.json(newAdministrador);
  } catch (err) {
    httpError(res, err);
  }
}

export const deleteAdministradores = async (req, res) => {
  try {
    await Administrador.deleteOne({_id: req.params.id});
    res.json({status: 'OK', data: `Administrador Eliminado con Exito`});
  } catch (err) {
    httpError(res, err);
  }
}

export const updateAdministrador = async (req, res) => {
  try {
    const updatedAdministrador = await Administrador.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
      );
      res.json({status: 'OK', data: updatedAdministrador});
  } catch (err) {
    httpError(res, err);
  }
}