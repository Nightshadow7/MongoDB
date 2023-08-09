import mongoose from "mongoose";
import {Schema} from 'mongoose';

const levelSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre de la ruta es Obligatoria'],
      unique: true,
    },
    Ruta:{
      type: Schema.Types.ObjectId,
      ref: 'Ruta',
      required: true
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    },
    Duracion:{
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Level = mongoose.model( 'levels' , levelSchema );

export default Level;