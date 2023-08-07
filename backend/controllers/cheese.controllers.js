import { response } from 'express';
import Cheese from '../models/Cheese.js';  
import { httpError } from "../helpers/handleError.js";

export const getCheeses = async (req, res = response) => {
  try {

    const { hasta = 10, desde = 0 } = req.query;
    const query = { Estado : true };

    const [ total, cheeses ] = await Promise.all([
      Cheese.countDocuments(query),
      Cheese.find(query)
        .populate('Usuario' , 'Nombre')
        .populate('Categoria' , 'Nombre')
        .skip(Number(desde))
        .limit(Number (hasta))
    ]);
    return res.json({
      total,
      cheeses
    });
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCheese = async (req, res = response) => {
    try {
      const { id } = re.params;
      const oneCheese = await Cheese.findById( id )
        .populate('Usuario', 'Nombre ')
        .populate('Categoria', 'Nombre')
      res.json(oneCheese);
    } catch (err) {
      httpError(res, err);
    }
}

export const postCheese = async(req, res = response) => {
  try {
    const { Estado , Usuario , ...body } = req.body;
    const cheeseDB = await Cheese.findOne({ Nombre: body.Nombre });
    if ( cheeseDB ) {
      return res.status(400).json({
        msg: `El Queso ${ cheeseDB.Nombre }, ya existe`
      });
    };
    const data = {
      ...body,
      Nombre: body.Nombre.toUpperCase(),
      Usuario: req.usuario._id,

    };
    const cheese = new Cheese( data );
    await cheese.save();
    res.status(201).json(cheese);
  } catch (err) {
    httpError( res , err )
  }
};

export const deleteCheeses = async (req, res = response) => {
  try {
    const {id} = req.params
    const cheese = await Cheese.findByIdAndUpdate( id, { Estado: false } , { New : true } );
    res.status(204).json(cheese)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateCheese = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { Estado, Usuario, ...data } = req.body;
    if( data.Nombre ) {
      data.Nombre  = data.Nombre.toUpperCase();
    }
    data.usuario = req.usuario._id;
    const cheese = await Cheese.findByIdAndUpdate(id, data, { new: true });
    res.json( {status: 'OK', data: cheese} );
  } catch (err) {
    httpError(res, err);
  }
}