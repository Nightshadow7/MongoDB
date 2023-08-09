import { response } from 'express';
import { Types } from 'mongoose';
const objectId = Types.ObjectId;
import Camper from './../models/Camper.js';
import Centro from '../models/Centro.js';
import Level from '../models/Level.js';
import Rol from '../models/Rol.js';
import Ruta from '../models/Ruta.js';

const allowedCollections = [
    'campers',
    'centros',
    'levels',
    'rols',
    'rutas'
]

const searchCampers = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const camper = await Camper.findById(criterio)
    .populate('rol')
    .populate('level', 'Nombre')
    return res.json({
        results: ( camper ) ? [ camper ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const campers = await Camper.find({
    $or: [{ Nombre: regex }, { Email: regex }, { NroIdentificacion: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: campers
  });

}

const searchCentros = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const centro = await Centro.findById(criterio);
    return res.json({
      results: ( centro ) ? [ centro ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const centros = await Centro.find({ 
    $or: [{ Nombre: regex }, { Ciudad: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: centros
  });
};

const searchLevels = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const level = await Level.findById(criterio)
      .populate('ruta','Nombre')
    return res.json({
      results: ( level ) ? [ level ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const levels = await Level.find({ 
    $or: [{ Nombre: regex }, { Ruta: regex }],
    $and: [{ Estado: true }]
  })
    .populate('ruta','Nombre')
  res.json({
    results: levels
  });
};

const searchRols = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const rol = await Rol.findById(criterio);
    return res.json({
      results: ( rol ) ? [ rol ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const rols = await Rol.find({ 
    $or: [{ Rol: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: rols
  });
};

const searchRutas = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const ruta = await Ruta.findById(criterio)
      .populate('centro', 'Nombre')
    return res.json({
      results: ( ruta ) ? [ ruta ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const rutas = await Rol.find({ 
    $or: [{ Nombre: regex } , { Centro: regex}],
    $and: [{ Estado: true }]
  })
    .populate('centro', 'Nombre')
  res.json({
    results: rutas
  });
};

export const search = ( req, res = response ) => {
  const { coleccion, criterio  } = req.params;
  if (!allowedCollections.includes(coleccion)){
    return res.status(400).json({
      msg: `El buscador solo permite las colecciones: ${allowedCollections}`
    })
  };
  switch (coleccion) {
    case 'campers':
      searchCampers(criterio, res);
    break;
    case 'centros':
      searchCentros(criterio, res);
    break;
    case 'levels':
      searchLevels(criterio, res);
    break;
    case 'rols':
      searchRols(criterio, res);
    break;
    case 'rutas':
      searchRutas(criterio, res);
    break;
    default:
      res.status(500).json({
        msg: 'This search doesnt exists'
      });
  };
};