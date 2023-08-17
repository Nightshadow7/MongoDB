import { response } from 'express';
import { Types } from 'mongoose';
const objectId = Types.ObjectId;
import Administrador from '../models/Administrador.js';
import Asistencia from '../models/Asistencia.js';
import Convivencia from '../models/Convivencia.js';
import Cronograma from '../models/Cronograma.js';
import Cumpleaño from '../models/Cumpleaño.js';
import Entrevista from '../models/Entrevista.js';
import Grupo from '../models/Grupo.js';
import Mes from '../models/Mes.js';
import Modulo from '../models/Modulo.js';
import Nota from '../models/Nota.js';
import Parentezco from '../models/Parentezco.js';
import Rol from '../models/Rol.js';
import Sexo from '../models/Sexo.js';
import Tema from '../models/Tema.js';
import Usuario from './../models/Usuario.js';
import Rols from '../models/Rol.js';

const allowedCollections = [
  'administradores',
  'asistencias',
  'convivencias',
  'cronogramas',
  'cumpleaños',
  'entrevistas',
  'grupos',
  'meses',
  'modulos',
  'notas',
  'parentezcos',
  'rols',
  'temas',
  'usuarios'
];
const searchAdministradores = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const administrador = await Administrador.findById(criterio)
      .populate('Rol', 'Rol')
    return res.json({
      results: ( administrador ) ? [ administrador ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const administradores = await Administrador.find({
    $or: [{ Nombre: regex } , { Email: regex }],
    $and: [{ Estado: true }]
  })
    .populate('Rol', 'Rol')
  res.json({
    results: administradores
  });
};
const searchAsistencias = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const asistencia = await Asistencia.findById(criterio)
    .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    return res.json({
      results: ( asistencia ) ? [ asistencia ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const asistencias = await Asistencia.find({
    $or: [{ Usuario: regex } , { Fecha: regex } ],
    $and: [{ Estado: true }]
  })
    .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
  res.json({
    results: asistencias
  });
};
const searchConvivencias = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const convivencia = await Convivencia.findById(criterio);
    return res.json({
      results: ( convivencia ) ? [ convivencia ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const convivencia = await Convivencia.find({
    $or: [{ Nombre: regex } ],
    $and: [{ Estado: true }]
  });
  res.json({
    results: convivencia
  });
};
const searchCronogramas = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const cronograma = await Cronograma.findById(criterio)
      .populate('Estudiante', ['Nombre' , 'Documento' , 'Edad' , 'Grupo' , 'Especialidades' , 'Sexo' ])
      .populate('Mes' , ['Numero' , 'Nombre'])
    return res.json({
      results: ( cronograma ) ? [ cronograma ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const cronogramas = await Cronograma.find({
    $or: [{ Estudiante: regex } , { Dia: regex } , { Hora: regex } , { Año: regex } , { Mes: regex }],
    $and: [{ Estado: true }]
  })
    .populate('Estudiante', ['Nombre' , 'Documento' , 'Edad' , 'Grupo' , 'Especialidades' , 'Sexo' ])
    .populate('Mes' , ['Numero' , 'Nombre'])
  res.json({
    results: cronogramas
  });
};
const searchCumpleaños = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const cumpleaño = await Cumpleaño.findById(criterio)
      .populate('Mes' , ['Numero' , 'Nombre'])
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    return res.json({
      results: ( cumpleaño ) ? [ cumpleaño ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const cumpleaños = await Cumpleaño.find({
    $or: [{ Mes: regex } , { Usuario: regex } ],
    $and: [{ Estado: true }]
  })
    .populate('Mes' , ['Numero' , 'Nombre'])
    .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
  res.json({
    results: cumpleaños
  });
};
const searchEntrevistas = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const entrevista = await Entrevista.findById(criterio)
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
      .populate('Psicologa', 'Nombre')
      .populate('Grupo' , '-Estado')
      .populate('Convivencia' , 'Nombre')
      .populate('Parentezco' , 'Parentezco')
      .populate('MesCumpleaños' , ['Numero' , 'Nombre'])
    return res.json({
      results: ( entrevista ) ? [ entrevista ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const entrevistas = await Entrevista.find({
    $or: [{ Usuario: regex } , { FechaNacimiento: regex } , { LugarResidencia: regex } , { LugarProcedencia: regex }],
    $and: [{ Estado: true }]
  })
    .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    .populate('Psicologa', 'Nombre')
    .populate('Grupo' , '-Estado')
    .populate('Convivencia' , 'Nombre')
    .populate('Parentezco' , 'Parentezco')
    .populate('MesCumpleaños' , ['Numero' , 'Nombre'])
  res.json({
    results: entrevistas
  });
};
const searchGrupos = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const grupo = await Grupo.findById(criterio);
    return res.json({
      results: ( grupo ) ? [ grupo ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const grupos = await Grupo.find({
    $or: [{ NombreGrupo: regex } , { Abreviacion: regex } , { NombreTrainer: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: grupos
  });
};
const searchMeses = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const mes = await Mes.findById(criterio);
    return res.json({
      results: ( mes ) ? [ mes ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const meses = await Mes.find({
    $or: [{ Numero: regex } , { Nombre: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: meses
  });
};
const searchModulos = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const modulo = await Modulo.findById(criterio);
    return res.json({
      results: ( modulo ) ? [ modulo ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const modulos = await Modulo.find({
    $or: [{ Nombre: regex } , { AlcanceEsperado: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: modulos
  });
};
const searchNotas = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const nota = await Nota.findById(criterio)
      .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
      .populate('Tema' , ['NombreTema' , 'Descripcion'])
      .populate('Modulo' , ['Nombre' , 'AlcanceEsperado'])
    return res.json({
      results: ( nota ) ? [ nota ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const notas = await Nota.find({
    $or: [{ Usuario: regex } , { Tema: regex } , { Modulo: regex }],
    $and: [{ Estado: true }]
  })
    .populate('Usuario' , ['Nombre' , 'Documento' , 'Edad' , 'Telefono' , 'Especialidades' , 'Sexo' ])
    .populate('Tema' , ['NombreTema' , 'Descripcion'])
    .populate('Modulo' , ['Nombre' , 'AlcanceEsperado'])
  res.json({
    results: notas
  });
};
const searchParentezcos = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const parentezco = await Parentezco.findById(criterio);
    return res.json({
      results: ( parentezco ) ? [ parentezco ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const parentezcos = await Parentezco.find({
    $or: [{ Parentezco: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: parentezcos
  });
};
const searchRols = async ( criterio = '', res = response ) => {
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
const searchSexos = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const sexo = await Sexo.findById(criterio);
    return res.json({
      results: ( sexo ) ? [ sexo ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const sexos = await Sexo.find({
    $or: [{ Tipo: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: sexos
  });
};
const searchTemas = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const tema = await Tema.findById(criterio);
    return res.json({
      results: ( tema ) ? [ tema ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const temas = await Tema.find({
    $or: [{ NombreTema: regex } , { Descripcion: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: temas
  });
};
const searchUsuarios = async ( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const usuario = await Usuario.findById(criterio);
    return res.json({
      results: ( usuario ) ? [ usuario ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const usuarios = await Usuario.find({
    $or: [{ Nombre: regex } , { Documento: regex } , { Sexo: regex } , { Grupo: regex } , { Email: regex } , { Parentezco: regex }],
    $and: [{ Estado: true }]
  });
  res.json({
    results: usuarios
  });
};








const searchCategorias = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const categoria = await Categoria.findById(criterio);
    return res.json({
      results: ( categoria ) ? [ categoria ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const categorias = await Categoria.find({ Nombre: regex, Estado: true });
  res.json({
    results: categorias
  });

}

const searchCheeses = async( criterio = '', res = response ) => {
  const isMongoID = objectId.isValid( criterio ); // TRUE 
  if ( isMongoID ) {
    const cheese = await Cheese.findById(criterio)
      .populate('Categoria','Nombre');
    return res.json({
      results: ( cheese ) ? [ cheese ] : []
    });
  };
  const regex = new RegExp( criterio, 'i' );
  const cheeses = await Cheese.find({ Nombre: regex, Estado: true })
    .populate('Categoria','Nombre')
  res.json({
    results: cheeses
  });
}





export const search = ( req, res = response ) => {
  const { coleccion, criterio  } = req.params;
  if (!allowedCollections.includes(coleccion)){
    return res.status(400).json({
      msg: `El buscador solo permite las colecciones: ${allowedCollections}`
    })
  };
  switch (coleccion) {
    case 'administradores':
      searchAdministradores(criterio, res);
    break;
    case 'asistencias':
      searchAsistencias(criterio, res);
    break;
    case 'convivencias':
      searchConvivencias(criterio, res);
    break;
    case 'cronogramas':
      searchCronogramas(criterio, res);
    break;
    case 'cumpleaños':
      searchCumpleaños(criterio, res);
    break;
    case 'entrevistas':
      searchEntrevistas(criterio, res);
    break;
    case 'grupos':
      searchGrupos(criterio, res);
    break;
    case 'meses':
      searchMeses(criterio, res);
    break;
    case 'modulos':
      searchModulos(criterio, res);
    break;
    case 'notas':
      searchNotas(criterio, res);
    break;
    case 'parentezcos':
      searchParentezcos(criterio, res);
    break;
    case 'sexos':
      searchSexos(criterio, res);
    break;
    case 'temas':
      searchTemas(criterio, res);
    break;
    case 'rols':
      searchRols(criterio, res);
    break;
    case 'rols':
      searchRols(criterio, res);
    break;
    case 'rols':
      searchRols(criterio, res);
    break;
    default:
      res.status(500).json({
        msg: 'This search doesnt exists'
      });
  };
};