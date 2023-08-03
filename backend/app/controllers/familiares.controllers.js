import Familiar from './../models/Familiar.js';
import { httpError } from "./../helpers/handleError.js";

export const getFamiliares = async (req, res) => {
    try {
        const allFamiliares = await Familiar.find();
        res.json(allFamiliares);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneFamiliar = async (req, res) => {
    try {
        const oneFamiliar = await Familiar.findOne({_id:req.params.id});
        res.json(oneFamiliar);
    } catch (err) {
        httpError(res, err);
    }
}

export const createFamiliares = async (req, res) => {
    try {
      const {Nombre , Parentezco} = req.body;
      const newFamiliar = await Familiar({Nombre , Parentezco});
      newFamiliar.save();
      res.json(newFamiliar);
    } catch (err) {
        httpError(res, err);
    }
}

export const deleteFamiliares = async (req, res) => {
    try {
        await Familiar.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Familiar Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
    }
}

export const updateFamiliar = async (req, res) => {
    try {
        const updatedFamiliar = await Familiar.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedFamiliar});
    } catch (err) {
        httpError(res, err);
    }
}