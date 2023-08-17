import mongoose from "mongoose";
import {Schema} from 'mongoose';

const asistenciaSchema = new mongoose.Schema(
  {
    Fecha:{
      type: Date,
      required: false,
      default: new Date()
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

const Asistencia = mongoose.model( 'asistencias' , asistenciaSchema );

export default Asistencia;