import {response} from "express";
import Usuario from "./../models/Usuario.js";
import generateJWT from "../helpers/generate.jwt.js";

export const login = async (req , res = response) => {
  const {Email , Password } = req.body;
  try {
    const emailExiste = await Usuario.findOne({Email});
    if (!emailExiste) {
      return res.status(400).json({
        msg: "El email no esta registrado"
      });
    };
    if (emailExiste.Estado === false) {
      return res.status(400).json({
        msg: "El usuario se encuentra inactivo"
      });
    };
    emailExiste.password = Usuario.comparePassword(Password,emailExiste.Password);
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