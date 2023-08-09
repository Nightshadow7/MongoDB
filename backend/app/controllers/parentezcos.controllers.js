import Parentezco from './../models/Parentezco.js';
import { httpError } from "./../helpers/handleError.js";
import { response } from 'express';

export const getParentezcos = async (req, res = response) => {
  try {
    const { hasta= 5 , desde = 0} = req.query;
    const query = {Estado : true};
    const [total , parentescos] = await Promise.all([
      Parentezco.countDocuments(query),
      Parentezco.find(query)
      .skip(Number(desde))
      .limit(Number(hasta))
    ])
    return res.json({
      total,
      parentescos
    });
  } catch (err) {
    httpError(res, err);
  };
};

export const getOneParentezco = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneParentezco = await Parentezco.findById( id );
    res.json(oneParentezco);
  } catch (err) {
    httpError(res, err);
  };
};

export const createParentezcos = async (req, res = response) => {
  try {
    const {Parentezco , ...body} = req.body;
    const parentezcoDB = await Parentezco.findOne({Parentezco : body.Parentezco});
    if(parentezcoDB){
      return res.status(400).json({
        msg: `EL parentezco ${parentezcoDB.Parentezco},  ya se encuentra en la base de datos`
      });
    };
    const data = {
      ...body,
      Parentezco: body.Parentezco.toUpperCase()
    }
    const parentezcos = new Parentezco( data );
    await parentezcos.save();
    res.status(201).json(parentezcos)
  } catch (err) {
    httpError(res, err);
  };
};

export const deleteParentezcos = async (req, res = response) => {
  try {
    const { id } = req.params;
    const parentezcos = await Parentezco.findByIdAndUpdate( id , { Estado : false} , { New :  true});
    res.status(204).json({ status : 'ok' , data: parentezcos , msg: `Parentezco eliminado con Exito`});
  } catch (err) {
    httpError(res, err);
  };
};

export const updateParentezco = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { ...data} = req.body;
    const updatedParentezco = await Parentezco.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
    );
    res.json({status: 'OK', data: updatedParentezco});
  } catch (err) {
    httpError(res, err);
  };
};