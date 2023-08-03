import Asistencia from '../models/Asistencia.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getAsistencias = async (req, res) => {
    try {
        const allAsistencias = await Asistencia.find();
        res.json(allAsistencias);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneAsistencia = async (req, res) => {
    try {
        const oneAsistencia = await Asistencia.findOne({_id:req.params.id});
        res.json(oneAsistencia);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createAsistencias = async (req, res) => {
    try {
      const {Fecha , Escusa} = req.body;
      const newAsistencia = await Asistencia({Fecha , Escusa});
      newAsistencia.save();
      res.json(newAsistencia);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteAsistencias = async (req, res) => {
    try {
        await Asistencia.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Asistencia Eliminada con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateAsistencias = async (req, res) => {
    try {
        const updatedAsistencia = await Asistencia.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedAsistencia});
    } catch (err) {
        httpErrors(res, err);
    }
}