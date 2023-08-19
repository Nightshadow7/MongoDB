import { response, request } from 'express';
import jwt from 'jsonwebtoken';
import Usuario from './../app/models/Usuario.js';
import Administrador from '../app/models/Administrador.js';

const validateJWT = async (req = request, res = response, next, role) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

    let userModel;
    if (role === 'Usuario') {
      userModel = Usuario;
    } else if (role === 'Cronos') {
      userModel = Administrador;
    };
    const user = await userModel.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: `Token no válido - ${role} no existe en la DB`,
      });
    };
    if (user.Estado) {
      return res.status(401).json({
        msg: `Token no válido - ${role} con estado: false`,
      });
    };
    req[role] = user;
    console.log(`req ${role} en validate`, req[role]);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  };
};

export const validateUserJWT = async (req = request, res = response, next) => {
  validateJWT(req, res, next, 'Usuario');
};
export const validateAdminJWT = async (req = request, res = response, next) => {
  validateJWT(req, res, next, 'Cronos');
};