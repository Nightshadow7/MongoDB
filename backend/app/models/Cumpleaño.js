import mongoose from "mongoose";
import {Schema} from 'mongoose';

const cumpleañosSchema = new mongoose.Schema(
  {
    Mes:{
      type: Schema.Types.ObjectId,
      ref: 'Mes',
      required: [true, 'El Mes Obligatorio'],
    },
    Nombre:{
      type: Schema.Types.ObjectId,
      ref: 'usuarios',
      required: [true, 'El Usuario es obligatorio'], 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Cumpleaño = mongoose.model( 'cumpleaños ' , cumpleañosSchema );

export default Cumpleaño;