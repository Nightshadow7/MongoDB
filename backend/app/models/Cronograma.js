import mongoose from "mongoose";
import {Schema} from 'mongoose';

const cronogramaSchema = new mongoose.Schema(
  {
    Estudiante:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: true,
      unique: true
    },
    Psicologa:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
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
      ref: 'meses',
      required: [true, 'Favor proporciona un mes'],
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

const Cronograma = mongoose.model( 'cronogramas' , cronogramaSchema );

export default Cronograma;