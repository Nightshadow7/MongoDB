import mongoose from "mongoose";
import {Schema} from 'mongoose';

const modulosSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
      unique: true
    },
    AlcanceEsperado:{
      type: String,
      required: [true, 'De una breve Descripcion del alcance esperado'], 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Modulo = mongoose.model( 'modulos' , modulosSchema );

export default Modulo;