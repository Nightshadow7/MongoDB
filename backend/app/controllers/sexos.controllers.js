import Sexo from './../models/Sexo.js';
import { httpError } from "./../helpers/handleError.js";

export const getSexos = async (req, res) => {
    try {
        const allSexos = await Sexo.find();
        res.json(allSexos);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneSexo = async (req, res) => {
    try {
        const oneSexo = await Sexo.findOne({_id:req.params.id});
        res.json(oneSexo);
    } catch (err) {
        httpError(res, err);
    }
}

export const createSexos = async (req, res) => { 
    try {
      const {Tipo} = req.body;
      const newSexo = await Sexo({Tipo});
      newSexo.save();
      res.json(newSexo);
    } catch (err) {
        httpError(res, err);
    }
}

export const deleteSexos = async (req, res) => {
    try {
        await Sexo.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Sexos Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
    }
}

export const updateSexo = async (req, res) => {
    try {
        const updatedSexo = await Sexo.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedSexo});
    } catch (err) {
        httpError(res, err);
    }
}