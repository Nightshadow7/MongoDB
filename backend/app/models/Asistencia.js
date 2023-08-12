import mongoose from "mongoose";
import {Schema} from 'mongoose';

const asistenciasSchema = new mongoose.Schema(
  {
    Fecha:{
      type: Date,
      required: [true, 'Ingrese una fecha valida'],
    },
    Usuario: {
      type: Schema.Types.ObjectId,
      ref: 'usuarios', 
      required: [true, 'El usuario es obligatorio'],
      trim: true,
    },
    Escusa:{
      type: Boolean,
      required: false, 
      trim: true,
      default: false
    },
    Estado: {
      type: Boolean,
      rerquired: false,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Asistencia = mongoose.model( 'psicologas' , asistenciasSchema );

export default Asistencia;