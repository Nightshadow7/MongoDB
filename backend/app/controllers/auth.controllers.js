import { response } from "express";
import Usuario from "./../models/Usuario.js";
import bcrypt from 'bcryptjs';
import generateJWT from "../helpers/generate.jwt.js";

export const login = async (req , res = response) => {
  try {
    const {Email , Password} = req.body;
    //Email 
    const emailExiste = await Usuario.findOne({Email});
    res.status(200).json(emailExiste);
    if (!existeEmail) {
      return res.status(400).json({msg: "El email no esta registrado"});
    };
    //Estado
    if (emailExiste.Estado === false) {
      return res.status(400).json({msg: "El usuario se encuentra inactivo"});
    };
    //Documento
    if (emailExiste.Documento === false) {
      return res.status(400).json({msg: "El Usuario con este documento ya se encuentra Registrado"});
    };
    //Password
    const correctPassword = Usuario.comparePassword(Password, emailExiste.Password);
    if(correctPassword === false) {
      return res.status(400).json(`La contraseña es incorrecta. ¡Intentalo Nuevamente!`);
    };
    //JWT
    // const token = jwt.sign({id: emailExiste._id}, process.env.PRIVATE_KEY, {expiresIn: 3600});
    const token  = await generateJWT(emailExiste.id);
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