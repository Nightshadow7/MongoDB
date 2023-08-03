import Modulo from './../models/Modulo.js';
import { httpError } from "./../helpers/handleError.js";

export const getModulos = async (req, res) => {
    try {
        const allModulos = await Modulo.find();
        res.json(allModulos);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneModulo = async (req, res) => {
    try {
        const oneModelo = await Modulo.findOne({_id:req.params.id});
        res.json(oneModelo);
    } catch (err) {
        httpError(res, err);
    }
}

export const createModulos = async (req, res) => {
    try {
      const {Nombre , AlcanceEsperado} = req.body;
      const newModulo = await Modulo({Nombre , AlcanceEsperado});
      newModulo.save();
      res.json(newModulo);
    } catch (err) {
        httpError(res, err);
    }
}

export const deleteModulos = async (req, res) => {
    try {
        await Modulo.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Modulo Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
    }
}

export const updateModulo = async (req, res) => {
    try {
        const updatedModulo = await Modulo.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedModulo});
    } catch (err) {
        httpError(res, err);
    }
}