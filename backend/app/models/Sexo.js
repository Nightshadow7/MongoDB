import mongoose from "mongoose";
import {Schema} from 'mongoose';

const sexosSchema = new mongoose.Schema(
  {
    Tipo:{
      type: String,
      required: [true, 'Asigne un tipo de sexo valido'],
      trim: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Sexo = mongoose.model( 'sexos' , sexosSchema );

export default Sexo;