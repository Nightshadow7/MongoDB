import mongoose from "mongoose";
import {Schema} from 'mongoose';

const notaSchema = new mongoose.Schema(
  {
    Usuario: {
      type: Schema.Types.ObjectId,
      ref:  'usuarios',
      required: [true, 'Proporcione un usuario'], 
    },
    Nota:{
      type: Number,
      required: [true, 'Ingrese una nota Valida'],
      trim: true
    },
    Tema:{
      type: Schema.Types.ObjectId,
      ref:  'temas',
      required: [true, 'Elija el Tema'], 
    },
    Modulo: {
      type: Schema.Types.ObjectId,
      ref: 'modulos',
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
const Nota = mongoose.model( 'notas' , notaSchema );

export default Nota;