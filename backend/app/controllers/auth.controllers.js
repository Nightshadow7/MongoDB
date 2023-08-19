import { response } from "express";
import Usuario from "./../models/Usuario.js";
import Administrador from "./../models/Administrador.js";
import generateJWT from "../helpers/generate.jwt.js";
import { httpError } from "./../helpers/handleError.js";

export const loginUser = async (req , res = response) => {
  const {Email , Password} = req.body;
  try {
    const emailExiste = await Usuario.findOne({Email});
    if (!emailExiste) {
      return res.status(400).json({msg: "El email no esta registrado"});
    };
    if (emailExiste.Estado === false) {
      return res.status(400).json({msg: "El usuario se encuentra inactivo"});
    };
    emailExiste.Password = Usuario.comparePassword(Password,emailExiste.Password);
    const token = await generateJWT(emailExiste.id);
    res.cookie("token", token)
    res.status(200).json({
      emailExiste,
      token,
      msg: "Bienvenido All good duuuuuude"
    });
  } catch (err) {
    httpError(res, err);
    console.log(err);
    return res.json({
      msg: "Datos insuficientes, Contacta a Phidolly"
    })
  }
};
export const loginAdmin = async (req , res = response ) => {
  const {Email, Password } = req.body;
  try {
    const emailExiste = await Administrador.findOne({Email});
    if (!emailExiste) return res.status(400).json({msg: "El email no esta registrado"});
    if (emailExiste.Estado === false) return res.status(400).json({msg: "El Administrador se encuentra inactivo"});
    if (!emailExiste.Password) return res.status(400).json({msg: "password necesaria -_- jmmmm"});
    if (!(emailExiste.Password = Administrador.comparePassword(Password,emailExiste.Password))) return res.status(400).json({msg: "Password Incorrecto"})
    const token = await generateJWT(emailExiste.id);
    res.cookie("token", token)
    res.status(200).json({
      emailExiste,
      token,
      msg: "Bienvenido All good duuuuuude"
    });
  } catch (err) {
    httpError(res, err);
    console.log(err);
    return res.json({
      msg: "Datos insuficientes, Contacta a Phidolly"
    })
  }
};