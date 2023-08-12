import mongoose from "mongoose";
import {Schema} from 'mongoose';

const rolSchema = new mongoose.Schema(
  {
    Rol:{
      type: String,
      required: [true, 'El nombre Del rol es obligatorio'],
      trim: true,
      unique: true,
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

const Rols = mongoose.model( 'rols' , rolSchema );

export default Rols;