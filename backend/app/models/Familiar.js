import mongoose from "mongoose";
import {Schema} from 'mongoose';

const familiarsSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre del familiar es obligatorio'],
    },
    Parentezco:{
      type: Schema.Types.ObjectId,
      ref: 'Parentezco',
      required: [true, 'El parentezco es obligatorio'],
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Familiar = mongoose.model( 'familiares' , familiarsSchema );

export default Familiar;