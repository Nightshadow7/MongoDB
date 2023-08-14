import mongoose from "mongoose";
import {Schema} from 'mongoose';

const gruposSchema = new mongoose.Schema(
  {
    NombreGrupo:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Abreviacion:{
      type: String,
      required: [true, 'Ingrese una abreviacion valida'], 
      trim: true,
      unique: true
    },
    NombreTrainer: {
      type: String,
      required: [true, 'Por favor Proporciona un  Nombre valido'],
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

const Grupo = mongoose.model( 'grupos' , gruposSchema );

export default Grupo;