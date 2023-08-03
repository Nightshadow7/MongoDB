import Categoria from './../models/Categoria.js';  
import { httpError} from "../helpers/handleError.js";

export const getCategorias = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const query = { Estado: true };
  
    const [ total, categorias ] = await Promise.all([
      Categoria.countDocuments(query),
      Categoria.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
        .populate('Usuario', '-Password -Estado -GoogleSignIn')
    ]);
    res.json({
      total,
      categorias
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCategoria = async (req, res) => {
  try {
    const oneCategoria = await Categoria.findOne({_id:req.params.id})
      .populate('Usuario', '-Password -Estado -GoogleSignIn')
    res.json(oneCategoria);
  } catch (err) {
    httpError(res, err);
  }
}

export const postCategoria = async(req, res ) => {
  const nombre = req.body.nombre.toUpperCase();
  const categoriaDB = await Categoria.findOne({ nombre });
  if ( categoriaDB ) {
    return res.status(400).json({
      msg: `La categoria ${ categoriaDB.nombre }, ya existe`
    });
  };
  const data = {
    nombre
  };
  const categoria = new Categoria( data );
  await categoria.save();
  res.status(201).json(categoria);
};

export const deleteCategorias = async (req, res) => {
  try {
    const {id} = req.params
    const categoria = await Categoria.findByIdAndUpdate( id, { Estado: false 
    });
    res.status(204).json(categoria)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateCategoria = async (req, res) => {
  try {
    req.body.usuarioUpdate = req.Usuario._id;
    const updatedCategoria = await Categoria.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
    res.json({status: 'OK', data: updatedCategoria});
  } catch (err) {
    httpError(res, err);
  }
}