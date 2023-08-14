import mongoose from "mongoose";
import {Schema} from 'mongoose';

const cumpleañosSchema = new mongoose.Schema(
  {
    Mes:{
      type: Schema.Types.ObjectId,
      ref: 'meses',
      required: [true, 'El Mes Obligatorio'],
    },
    Usuario:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: [true, 'El Usuario es obligatorio'],
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

const Cumpleaño = mongoose.model( 'cumpleaños ' , cumpleañosSchema );

export default Cumpleaño;