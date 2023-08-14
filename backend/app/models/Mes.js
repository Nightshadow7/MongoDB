import mongoose from "mongoose";
import {Schema} from 'mongoose';

const mesesSchema = new mongoose.Schema(
  {
    Numero:{
      type: Number,
      required: [true, 'Ingrese un valor valido'],
      unique: true,
      trim: true,
    },
    Nombre:{
      type: String,
      required: [true, 'El nombre es necesario'], 
      trim: true,
      unique: true,
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
const Mes = mongoose.model( 'meses' , mesesSchema );
export default Mes;