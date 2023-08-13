import mongoose from "mongoose";
import {Schema} from 'mongoose';

const moduloSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
      unique: true
    },
    AlcanceEsperado:{
      type: String,
      required: [true, 'De una breve Descripcion del alcance esperado'], 
    },
    Estado: {
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

const Modulo = mongoose.model( 'modulos' , moduloSchema );

export default Modulo;