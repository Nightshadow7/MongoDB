import mongoose from "mongoose";
import {Schema} from 'mongoose';

const cronogramasSchema = new mongoose.Schema(
  {
    Nombre:{
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: [true, 'El nombre es Obligatorio'],
    },
    Psicologa:{
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    Dia: {
      type: Number,
      required: [true, 'Por favor Proporciona una fecha'],
      trim: true
    },
    Hora:{
      type: Date,
      required: [true, 'Por favor proporciona un dia'],
    },
    Año:{
      type: Number,
      required: [true, 'Por favor proporciona un Año'],
      trim: true
    },
    Mes:{
      type: Schema.Types.ObjectId,
      ref: 'Mes',
      required: [true, 'Favor proporciona un mes'],
    },
    Grupo:{
      type: Schema.Types.ObjectId,
      ref:  'Usuario',
      required: true
    },
    Documento:{
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Cronograma = mongoose.model( 'cronogramas' , cronogramasSchema );

export default Cronograma;