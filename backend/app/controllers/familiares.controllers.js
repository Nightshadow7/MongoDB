import Familiar from './../models/Familiar.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getFamiliares = async (req, res) => {
    try {
        const allFamiliares = await Familiar.find();
        res.json(allFamiliares);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneFamiliar = async (req, res) => {
    try {
        const oneFamiliar = await Familiar.findOne({_id:req.params.id});
        res.json(oneFamiliar);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createFamiliares = async (req, res) => {
    try {
      const {Mes , Nombre} = req.body;
      const newFamiliar = await Familiar({Mes , Nombre});
      newFamiliar.save();
      res.json(newFamiliar);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteFamiliares = async (req, res) => {
    try {
        await Familiar.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Familiar Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
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
        httpErrors(res, err);
    }
}