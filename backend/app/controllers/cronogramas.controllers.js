import Cronograma from '../models/Cronograma.js';
import { httpErrors } from "../helpers/handleErrors.js";

export const getCronogramas = async (req, res) => {
    try {
        const allCronogramas = await Cronograma.find();
        res.json(allCronogramas);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneCronograma = async (req, res) => {
    try {
        const oneCronograma = await Cronograma.findOne({_id:req.params.id});
        res.json(oneCronograma);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const createCronogramas = async (req, res) => {
    try {
      const {Nombre , Psicologa , Dia , Hora , Año , Mes , Grupo , Documento} = req.body;
      const newCronograma = await Cronograma({Nombre , Psicologa , Dia , Hora , Año , Mes , Grupo , Documento});
      newCronograma.save();
      res.json(newCronograma);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteCronogramas = async (req, res) => {
    try {
        await Cronograma.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Cronograma Eliminado con Exito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateCronograma = async (req, res) => {
    try {
        const updatedCronograma = await Cronograma.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedCronograma});
    } catch (err) {
        httpErrors(res, err);
    }
}