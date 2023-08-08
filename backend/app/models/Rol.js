import mongoose from "mongoose";
import {Schema} from 'mongoose';

const rolsSchema = new mongoose.Schema(
  {
    Rol:{
      type: String,
      required: [true, 'El nombre Del rol es obligatorio'],
      trim: true,
      unique: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Rols = mongoose.model( 'rols' , rolsSchema );

export default Rols;