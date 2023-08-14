import mongoose from "mongoose";
import {Schema} from 'mongoose';

const entrevistaSchema = new mongoose.Schema(
  {
    Usuario:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: [true, 'El nombre es Obligatorio'],
      trim: true,
    },
    Imagen:{
      type: String,
      required: false,
      trim: true,
    },
    FechaNacimiento:{
      type: Date,
      required: true,
    },
    Psicologa:{
      type: String, //Es ----------Foranea- por ahora texto---------
      required: [true, "Seleccione al menos una Psicologa"]
    },
    Fecha:{
      type: Date,
      required: false,
    },
    Hora:{
      type: Date, //No se como se pone en el esquema para las horas
      required: false,
    },
    Grupo:{
      type: Schema.Types.ObjectId,
      ref: 'grupos',
      required: false,
    },
    LugarResidencia:{
      type: String,
      required: false,
    },
    LugarProcedencia:{
      type: String,
      required: false,
    },
    Hijos:{
      type: Boolean,
      required: false,
    },
    TotalFamiliares:{
      type: Number,
      required: false,
    },
    Convivencia:{
      type: Schema.Types.ObjectId,
      ref: 'convivencias',
      required: false,
    },
    Familiares:[{
      Nombre:{
        type: String,
        required: [true, 'El nombre del familiar es obligatorio'],
        unique: true,
      },
      Parentezco:{
        type: Schema.Types.ObjectId,
        ref: 'parentezcos',
        required: [true, 'El parentezco es obligatorio'],
        trim: true
      }
    }],
    AreaPersonal:{
      type: String,
      required: false,
    },
    AreaSomatica:{
      type: String,
      required: false,
    },
    AreaFamiliar:{
      type: String,
      required: false,
    },
    AreaEconomica:{
      type: String,
      required: false,
    },
    AreaAfectiva:{
      type: String,
      required: false,
    },
    AreaEducativa:{
      type: String,
      required: false,
    },
    AreaSocial:{
      type: String,
      required: false,
    },
    MetasCortoPlazo:{
      type: String,
      required: false,
    },
    MetasMedianoPlazo:{
      type: String,
      required: false,
    },
    MetasLargoPlazo:{
      type: String,
      required: false,
    },
    HabilidadesSer:{
      type: String,
      required: false,
    },
    HabilidadesHacer:{
      type: String,
      required: false,
    },
    Ajustes:{
      type: String,
      required: false,
    },
    Pasado:{
      type: String,
      required: false,
    },
    Presente:{
      type: String,
      required: false,
    },
    Futuro:{
      type: String,
      required: false,
    },
    SeguimientoPsicologico:{
      type: String,
      required: false,
    },
    PerfilPsicologico:{
      type: String,
      required: false,
    },
    Activo:{
      type: Boolean,
      required: false,
      default: true 
    },
    MesCumpleaños:{
      type: Schema.Types.ObjectId,
      ref: 'meses',
      required: false
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
const Entrevista = mongoose.model( 'entrevistas' , entrevistaSchema );

export default Entrevista;


//Nombre , Sexo , Imagen , Telefono , Edad , FechaNacimiento , Documento , Psicologa , Email , Password , Fecha ,	Hora ,	Grupo , LugarResidencia ,	LugarProcedencia ,	Hijos ,	TotalFamiliares	, Convivencia , Famiiliares	,	AreaPersonal ,	AreaSomatica ,	AreaFamiliar ,	AreaEconomica ,	AreaAfectiva ,	AreaEducativa ,	AreaSocial ,	MetasCortoPLazo ,	MetasMedianoPlazo ,	MetasLargoPlazo ,	HabilidadesSer ,	HabilidadesHacer ,	Ajustes ,	Pasado ,	Presente ,	Futuro , 	SeguimientoPsicologico ,	PerfilPsicologico ,	Activo ,Asistencia ,	Notas	,	MesCumpleaños