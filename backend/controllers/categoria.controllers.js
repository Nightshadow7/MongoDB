import Categoria from './../models/Categoria.js';  
import { response } from 'express';
import { httpError} from "../helpers/handleError.js";

export const getCategorias = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, categorias ] = await Promise.all([
      Categoria.countDocuments(query),
      Categoria.find(query)
        .populate('Usuario', ['Nombre' , 'Email'])
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      categorias
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOneCategoria = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneCategoria = await Categoria.findById( id )
      .populate('Usuario' , ['Nombre' , 'Email'])
    res.json(oneCategoria);
  } catch (err) {
    httpError(res, err);
  };
};
export const postCategoria = async(req, res ) => {
  try {
    const Nombre = req.body.Nombre.toUpperCase();
    const categoriaDB = await Categoria.findOne({ Nombre });
    if ( categoriaDB ) {
      return res.status(400).json({
        msg: `La categoria ${ categoriaDB.Nombre }, ya existe`
      });
    };
    const data = {
      Nombre,
      Usuario: req.usuario._id,
    };
    const categoria = new Categoria( data );
    await categoria.save();
    res.status(201).json(categoria);
  } catch (err) {
    httpError(res, err);
  };
};
export const deleteCategorias = async (req, res) => {
  try {
    const { id } = req.params
    const categoriaEliminada = await Categoria.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(204).json(categoriaEliminada)
  } catch (err) {
      httpError(res, err);
  };
};
export const updateCategoria = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado , Usuario , ...data } = req.body;
    data.Nombre  = data.Nombre.toUpperCase();
    data.Usuario = req.usuario._id;
    const updatedCategoria = await Categoria.findOneAndUpdate(
      {_id: id},
      data,
      {new:true}
    );
    res.json({status: 'OK', categoria :updatedCategoria});
  } catch (err) {
    httpError(res, err);
  };
};