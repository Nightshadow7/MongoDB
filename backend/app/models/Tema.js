import mongoose from "mongoose";
import {Schema} from 'mongoose';

const temaSchema = new mongoose.Schema(
  {
    NombreTema:{
      type: String,
      required: [true, 'El nombre del Tema es Obligatorio'],
      unique: true
    },
    Descripcion:{
      type: String,
      required: [true, 'Ingrese una breve descripcion del tema antes mencionado'], 
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

const Tema = mongoose.model( 'temas' , temaSchema );

export default Tema;