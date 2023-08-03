import mongoose from "mongoose";
import {Schema} from 'mongoose';

const usuariosSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
      trim: true,
    },
    Sexo:{
      type: String, //NO SE AUN COMO GUARDAR EL DATO OTROS como array es : --------Foranea----
      required: [true , 'El sexo es Obligatorio'],
    },
    Imagen:{
      type: String,
      required: false,
      trim: true,
    },
    Telefono:{
      type: Number,
      required: [true , "Debe asignar un numero de Telefono"],
      trim: true,
    },
    Edad:{
      type: Number,
      required: true,
      trim: [true , "Debe asignarle una Edad al Camper"],
    },
    FechaNacimiento:{
      type: Date,
      required: true,
    },
    Documento:{
      type: Number,
      required: [true, "El numero de Documento es Requerido"],
      trim: true,
      unique: true
    },
    Psicologa:{
      type: Schema.Types.ObjectId, //Es ----------Foranea----------
      ref: 'Psicologa',
      required: [true, "Seleccione al menos una Psicologa"]
    },
    Email:{
      type: String,
      required: [true, "El correo electronico es Obligatorio"],
      trim: true,
      unique: true
    },
    Password:{
      type: String,
      required: [true, "Genere una contraseña"],
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
      type: String, //---------------------------foreing---
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
      type: String, //------------------------foranea--------
      required: false,
    },
    Familiares:{ //Aca se añaden 2 datos no se como añadirlos 
      type: Array,
      required: false,
    },
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
    Asistencia:{
      type: Array, ///Se guardaran las notas progresivamente a medida que se necesiten 
      required: false
    },
    Notas:{
      type: Array, //Se guardaran a medida que se registren
      required: false
    },
    MesCumpleaños:{
      type: Number, ///--------------------------Foreing--------------------------------------
      required: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Usuario = mongoose.model( 'usuarios' , usuariosSchema );

export default Usuario;


//Nombre , Sexo , Imagen , Telefono , Edad , FechaNacimiento , Documento , Psicologa , Email , Password , Fecha ,	Hora ,	Grupo , LugarResidencia ,	LugarProcedencia ,	Hijos ,	TotalFamiliares	, Convivencia , Famiiliares	,	AreaPersonal ,	AreaSomatica ,	AreaFamiliar ,	AreaEconomica ,	AreaAfectiva ,	AreaEducativa ,	AreaSocial ,	MetasCortoPLazo ,	MetasMedianoPlazo ,	MetasLargoPlazo ,	HabilidadesSer ,	HabilidadesHacer ,	Ajustes ,	Pasado ,	Presente ,	Futuro , 	SeguimientoPsicologico ,	PerfilPsicologico ,	Activo ,Asistencia ,	Notas	,	MesCumpleaños