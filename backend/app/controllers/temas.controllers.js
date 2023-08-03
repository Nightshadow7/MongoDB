import Tema from './../models/Tema.js';
import { httpError } from "./../helpers/handleError.js";

export const getTemas = async (req, res) => {
    try {
        const allTemas = await Tema.find();
        res.json(allTemas);
    } catch (err) {
        httpError(res, err);
    }
}

export const getOneTema = async (req, res) => {
    try {
        const oneTema = await Tema.findOne({_id:req.params.id});
        res.json(oneTema);
    } catch (err) {
        httpError(res, err);
    }
}

export const createTemas = async (req, res) => {
    try {
      const {NombreTema , Descripcion} = req.body;
      const newTema = await Tema({NombreTema ,  Descripcion});
      newTema.save();
      res.json(newTema);
    } catch (err) {
        httpError(res, err);
    }
}

export const deleteTemas = async (req, res) => {
    try {
        await Tema.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Temas Eliminado con Exito`});
    } catch (err) {
        httpError(res, err);
    }
}

export const updateTema = async (req, res) => {
    try {
        const updatedTema = await Tema.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedTema});
    } catch (err) {
        httpError(res, err);
    }
}