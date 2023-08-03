import Sexo from './../models/Sexo.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getSexos = async (req, res) => {
    try {
        const allSexos = await Sexo.find();
        res.json(allSexos);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneSexo = async (req, res) => {
    try {
        const oneSexo = await Sexo.findOne({_id:req.params.id});
        res.json(oneSexo);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createSexos = async (req, res) => { 
    try {
      const {Tipo} = req.body;
      const newSexo = await Sexo({Tipo});
      newSexo.save();
      res.json(newSexo);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteSexos = async (req, res) => {
    try {
        await Sexo.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Sexos Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
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
        httpErrors(res, err);
    }
}