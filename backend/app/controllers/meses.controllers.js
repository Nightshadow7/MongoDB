import Mes from './../models/Mes.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getMeses = async (req, res) => {
    try {
        const allMeses = await Mes.find();
        res.json(allMeses);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneMes = async (req, res) => {
    try {
        const oneMes = await Mes.findOne({_id:req.params.id});
        res.json(oneMes);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createMeses = async (req, res) => {
    try {
      const {Numero , Nombre} = req.body;
      const newMes = await Mes({Numero , Nombre});
      newMes.save();
      res.json(newMes);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteMeses = async (req, res) => {
    try {
        await Mes.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Mes Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateMes = async (req, res) => {
    try {
        const updatedMes = await Mes.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedMes});
    } catch (err) {
        httpErrors(res, err);
    }
}