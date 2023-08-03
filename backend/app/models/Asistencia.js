import mongoose from "mongoose";
import {Schema} from 'mongoose';

const asistenciasSchema = new mongoose.Schema(
  {
    Fecha:{
      type: Date,
      required: [true, 'Ingrese una fecha valida'],
    },
    Escusa:{
      type: Boolean,
      required: false, 
      trim: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Asistencia = mongoose.model( 'psicologas' , asistenciasSchema );

export default Asistencia;