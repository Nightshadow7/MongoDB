import mongoose from "mongoose";
import {Schema} from 'mongoose';

const sexoSchema = new mongoose.Schema(
  {
    Tipo:{
      type: String,
      required: [true, 'Asigne un tipo de sexo valido'],
      trim: true,
      unique: true
    },
    Estado:{
      type: String,
      required: false,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Sexo = mongoose.model( 'sexos' , sexoSchema );

export default Sexo;