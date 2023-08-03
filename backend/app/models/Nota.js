import mongoose from "mongoose";
import {Schema} from 'mongoose';

const notasSchema = new mongoose.Schema(
  {
    Nota:{
      type: Number,
      required: [true, 'Ingrese una nota Valida'],
    },
    Tema:{
      type: Schema.Types.ObjectId,
      ref:  'Tema',
      required: [true, 'Elija el Tema'], 
    },
    Modulo: {
      type: Schema.Types.ObjectId,
      ref: 'Modulo',
      required: [true, 'Por favor Proporciona el modulo'],
    },
    Observaciones:{
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Nota = mongoose.model( 'notas' , notasSchema );

export default Nota;