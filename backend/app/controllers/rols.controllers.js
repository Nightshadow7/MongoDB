import Rol from './../models/Rol.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getRols = async (req, res) => {
    try {
        const allRols = await Rol.find();
        res.json(allRols);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneRol = async (req, res) => {
    try {
        const oneRol = await Rol.findOne({_id:req.params.id});
        res.json(oneRol);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createRols = async (req, res) => {
    try {
      const {Rol} = req.body;
      const newRol = await Rol({Rol});
      newRol.save();
      res.json(newRol);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteRols = async (req, res) => {
    try {
        await Rol.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Rols Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateRol = async (req, res) => {
    try {
        const updatedRol = await Rol.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedRol});
    } catch (err) {
        httpErrors(res, err);
    }
}