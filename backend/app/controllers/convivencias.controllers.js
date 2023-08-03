import Convivencia from "../models/convivencia.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getConvivencias = async (req, res) => {
    try {
        const allConvivencias = await Convivencia.find();
        res.json(allConvivencias);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneConvivencia = async (req, res) => {
    try {
        const oneConvivencia = await Convivencia.findOne({_id:req.params.id});
        res.json(oneConvivencia);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createConvivencias = async (req, res) => {
    try {
      const {Convivencia , Campo} = req.body;
      const newConvivencia = await Convivencia({Convivencia , Campo});
      newConvivencia.save();
      res.json(newConvivencia);
    } catch (err) {
        httpErrors(res, err); 
    }
}

export const deleteConvivencias = async (req, res) => {
    try {
        await Convivencia.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Convivencia Eliminada con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateConvivencia = async (req, res) => {
    try {
        const updatedConvivencia = await Convivencia.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updateConvivencia});
    } catch (err) {
        httpErrors(res, err);
    }
}