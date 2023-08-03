import {response} from "express";
import Usuario from "./../models/Usuario.js";
import bcrypt from 'bcryptjs'
import generateJWT from "../helpers/generate.jwt.js";

export const login = async (req , res = response) => {
  const {Email , Password } = req.body;
  try {

    //Verificar que existe el email en la base de datos
    const emailExiste = await Usuario.findOne({Email});
    res.status(200).json(emailExiste);
    if (!existeEmail) {
      return res.status(400).json({msg: "El email no esta registrado"});
    };

    //Verificar si el Usuario Esta activo
    if (emailExiste.Estado === false) {
      return res.status(400).json({msg: "El usuario se encuentra inactivo"});
    };
    //Verificar si el Password es correcto y coincide con la llave 
    emailExiste.password = Usuario.comparePassword(Password,emailExiste.sassword);

    //Verificacion del JSON WEB TOKEN

    const token = await generateJWT(emailExiste.id)
    res.status(200).json({
      emailExiste,
      token,
      msg: "Bienvenido All good duuuuuude"
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Datos insuficientes, Contacta a Phidolly"
    })
  }
};