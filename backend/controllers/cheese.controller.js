import Cheese from './../models/Cheese.js';  
import { httpError} from "../helpers/handleError.js";

export const getCheeses = async (req, res) => {
  try {
    if(req.query){
      const { hasta, desde } = req.query;
    const query = { Estado: true };
    const [ total, cheeses ] = await Promise.all([
      Cheese.countDocuments(query),
      Cheese.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
        .populate('Usuario', '-Password -Estado -GoogleSignIn ')
        .populate('UsuarioUpdate', '-Password -Estado -GoogleSignIn ')
        .populate('Categoria', '-Estado -Usuario ')
      ]);
      return res.json({
        total,
        cheeses
      });
    }
    const cheeses = await Cheese.find()
        .populate('Usuario', '-Password -Estado -GoogleSignIn ')
        .populate('UsuarioUpdate', '-Password -Estado -GoogleSignIn ')
        .populate('Categoria', '-Estado -Usuario')
    res.json(cheeses);
  } catch (err) {
    httpError(res, err);
  }
}

export const getOneCheese = async (req, res) => {
    try {
        const oneCheese = await Cheese.findOne({_id:req.params.id})
        .populate('Usuario', '-Password -Estado -GoogleSignIn ')
        .populate('UsuarioUpdate', '-Password -Estado -GoogleSignIn ')
        .populate('Categoria', '-Estado -Usuario')
        res.json(oneCheese);
    } catch (err) {
        httpError(res, err);
    }
}

export const postCheese = async(req, res ) => {
  const nombre = req.body.nombre.toUpperCase();
  const cheeseDB = await Cheese.findOne({ nombre });
  if ( cheeseDB ) {
    return res.status(400).json({
      msg: `El queso ${ cheeseDB.nombre }, ya existe`
    });
  };
  const data = {
    nombre,
    cheeses: req.Cheese._id
  };
  const cheese = new Cheese( data );
  // Guardar DB
  await cheese.save();
  res.status(201).json(cheese);
};

export const deleteCheeses = async (req, res) => {
  try {
    const {id} = req.params
    const cheese = await Cheese.findByIdAndUpdate( id, { Estado: false 
    });
    res.status(204).json(cheese)
  } catch (err) {
      httpError(res, err);
  }
}

export const updateCheese = async (req, res) => {
  try {
    const updatedCheese = await Cheese.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
    res.json({status: 'OK', data: updatedCheese});
  } catch (err) {
    httpError(res, err);
  }
}