import mongoose from "mongoose";
import {Schema} from 'mongoose';

const convivenciaSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre de la convivencia debe ser valida'],
      unique: true
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

const Convivencia = mongoose.model( 'convivencias' , convivenciaSchema );

export default Convivencia;