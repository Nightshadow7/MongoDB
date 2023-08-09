import mongoose from "mongoose";
import {Schema} from 'mongoose';

const rutaSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre de la ruta es Obligatoria'],
      unique: true,
    },
    Estado:{
      type:  Boolean,
      required: false,
      default: true
    },
    Centro:{
      type: Schema.Types.ObjectId,
      ref: 'Centro',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Ruta = mongoose.model( 'rutas' , rutaSchema );

export default Ruta;