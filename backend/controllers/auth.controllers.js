import {response} from "express";
import Usuario from "./../models/Usuario.js";
import bcrypt from 'bcryptjs'

const login = async (req,res=response) => {
  const {Email , Password , Estado} = req.body;
  try {
    //Verificar que existe el email en la base de datos
    const emailExiste = await Usuario.findOne({Email});
    res.status(200).json(emailExiste);
    if (!existeEmail) {
      return res.status(400).json({msg: "El email no esta registrado"});
    };
    //Verificar si el Usuario Esta activo
    if (emailExiste.Estado === false) {
      return res.status(400).json({msg: "El usuario no esta activo"});
    };
    //Verificar si el Password es correcto y coincide con la llave 
    const passwordCorrecto = bcrypt.compareSync(Password,emailExiste.Password);
    if (!passwordCorrecto) {
      return res.status(400).json({msg: "El password no es correcto"});
    };
    return res.status(200).json({
      msg: "Bienvenido All good duuuuuude",
      usuario: emailExiste
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Datos insuficientes, Contacta a Phidolly"
    })
  }
  
};

export {login};