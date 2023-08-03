import mongoose from "mongoose";
import {Schema} from 'mongoose';

const convivenciasSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre de la convivencia debe ser valida'],
    },
    Campo:{
      type: String,
      required: [true, 'El numero de Documento es Obligatorio'], 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Convivencia = mongoose.model( 'convivencias' , convivenciasSchema );

export default Convivencia;