import Grupo from './../models/Grupo.js';
import { httpError } from "./../helpers/handleError.js";

export const getGrupos = async (req, res) => {
    try {
        const allGrupos = await Grupo.find();
        res.json(allGrupos);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneGrupo = async (req, res) => {
    try {
        const oneGrupo = await Grupo.findOne({_id:req.params.id});
        res.json(oneGrupo);
    } catch (err) {
        httpError(res, err);
    }
}

export const createGrupos = async (req, res) => {
    try {
      const {NombreGrupo , Abreviacion , NombreTrainer} = req.body;
      const newGrupos = await Grupo({NombreGrupo , Abreviacion , NombreTrainer});
      newGrupos.save();
      res.json(newGrupos);
    } catch (err) {
        httpError(res, err);
    }
}

export const deleteGrupos = async (req, res) => {
    try {
        await Grupo.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Grupo Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
    }
}

export const updateGrupo = async (req, res) => {
    try {
        const updatedGrupo = await Grupo.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedGrupo});
    } catch (err) {
        httpError(res, err);
    }
}