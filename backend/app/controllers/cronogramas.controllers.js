import Cronograma from '../models/Cronograma.js';
import { httpError } from "./../helpers/handleError.js";

export const getCronogramas = async (req, res) => {
    try {
        const allCronogramas = await Cronograma.find();
        res.json(allCronogramas);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneCronograma = async (req, res) => {
    try {
        const oneCronograma = await Cronograma.findOne({_id:req.params.id});
        res.json(oneCronograma);
    } catch (err) {
        httpError(res, err);
    }
}

export const createCronogramas = async (req, res) => {
    try {
      const {Nombre , Psicologa , Dia , Hora , Año , Mes , Grupo , Documento} = req.body;
      const newCronograma = await Cronograma({Nombre , Psicologa , Dia , Hora , Año , Mes , Grupo , Documento});
      newCronograma.save();
      res.json(newCronograma);
    } catch (err) {
      httpError(res, err);
    }
}

export const deleteCronogramas = async (req, res) => {
    try {
        await Cronograma.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Cronograma Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
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
        httpError(res, err);
    }
}