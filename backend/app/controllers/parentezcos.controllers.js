import Parentezco from './../models/Parentezco.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getParentezcos = async (req, res) => {
    try {
        const allParentezcos = await Parentezco.find();
        res.json(allParentezcos);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneParentezco = async (req, res) => {
    try {
        const oneParentezco = await Parentezco.findOne({_id:req.params.id});
        res.json(oneParentezco);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createParentezcos = async (req, res) => {
    try {
      const {Parentezcos} = req.body;
      const newParentezco = await Parentezco({Parentezcos});
      newParentezco.save();
      res.json(newParentezco);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteParentezcos = async (req, res) => {
    try {
        await Parentezco.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Parentezcos Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateParentezco = async (req, res) => {
    try {
        const updatedParentezco = await Parentezco.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedParentezco});
    } catch (err) {
        httpErrors(res, err);
    }
}