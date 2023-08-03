import mongoose from "mongoose";
import {Schema} from 'mongoose';

const temasSchema = new mongoose.Schema(
  {
    NombreTema:{
      type: String,
      required: [true, 'El nombre del Tema es Obligatorio'],
      unique: true
    },
    Descripcion:{
      type: String,
      required: [true, 'Ingrese una breve descripcion del tema antes mencionado'], 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Tema = mongoose.model( 'temas' , temasSchema );

export default Tema;